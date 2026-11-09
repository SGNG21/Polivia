import {NextResponse} from 'next/server';
export const runtime='nodejs';
type Payload={name?:unknown;email?:unknown;company?:unknown;phone?:unknown;service?:unknown;budget?:unknown;message?:unknown;website?:unknown;consent?:unknown};
const clean=(v:unknown,max=500)=>typeof v==='string'?v.trim().slice(0,max):'';
const htmlEscape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]||c));
export async function POST(request:Request){let body:Payload;try{if(Number(request.headers.get('content-length')||0)>16000)return NextResponse.json({error:'Message trop volumineux.'},{status:413});body=await request.json()}catch{return NextResponse.json({error:'Requête invalide.'},{status:400})}
 if(clean(body.website))return NextResponse.json({ok:true});
 const name=clean(body.name,100),email=clean(body.email,200),company=clean(body.company,120),phone=clean(body.phone,30),service=clean(body.service,80),budget=clean(body.budget,80),message=clean(body.message,5000);
 if(name.length<2||!/^\S+@\S+\.\S+$/.test(email)||!service||message.length<15||body.consent!==true)return NextResponse.json({error:'Veuillez vérifier les champs obligatoires.'},{status:400});
 const apiKey=process.env.RESEND_API_KEY,to=process.env.CONTACT_TO_EMAIL,from=process.env.CONTACT_FROM_EMAIL;
 if(!apiKey||!to||!from)return NextResponse.json({error:'Le formulaire n’est pas encore activé. Contactez directement POLIVIA par ses coordonnées professionnelles.'},{status:503});
 const pairs=[['Nom',name],['Email',email],['Entreprise',company],['Téléphone',phone],['Service',service],['Budget',budget],['Message',message]];
 try {const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),10000);let response:Response;try{response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject:`[POLIVIA] Nouvelle demande — ${service}`,html:`<h2>Nouvelle demande POLIVIA</h2>${pairs.map(([k,v])=>`<p><strong>${htmlEscape(k)}</strong><br>${htmlEscape(v).replace(/\n/g,'<br>')}</p>`).join('')}`,text:pairs.map(([k,v])=>`${k}: ${v}`).join('\n\n')}),signal:controller.signal})}finally{clearTimeout(timer)}if(!response.ok)throw new Error('service mail error');return NextResponse.json({ok:true})}catch{return NextResponse.json({error:'L’envoi a échoué. Merci de réessayer plus tard.'},{status:502})}}
