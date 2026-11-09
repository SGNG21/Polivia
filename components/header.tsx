"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {ArrowUpRight,Menu,X} from 'lucide-react';
const links=[['/','Accueil'],['/realisations','Réalisations'],['/services','Services'],['/plateforme','Plateforme'],['/contact','Contact']];
export default function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();return <header className="site-header"><div className="container header-inner"><Link className="logo" href="/" aria-label="POLIVIA — Accueil" onClick={()=>setOpen(false)}><span className="logo-symbol">P</span><span>POLIVIA</span></Link><nav id="nav" className={'nav '+(open?'is-open':'')} aria-label="Navigation principale">{links.map(([href,name])=><Link key={href} onClick={()=>setOpen(false)} className={pathname===href?'active':''} href={href}>{name}</Link>)}<Link onClick={()=>setOpen(false)} className="nav-mobile-cta" href="/contact">Demander un devis <ArrowUpRight size={17}/></Link></nav><Link className="header-cta" href="/contact">Demander un devis <ArrowUpRight size={16}/></Link><button onClick={()=>setOpen(!open)} className="menu-toggle" aria-expanded={open} aria-controls="nav" aria-label={open?'Fermer le menu':'Ouvrir le menu'}>{open?<X/>:<Menu/>}</button></div></header>}
