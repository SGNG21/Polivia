import type {Metadata,Viewport} from 'next';
import Header from '@/components/header';import Footer from '@/components/footer';import {site} from '@/lib/data';import './globals.css';
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#0b1422'};
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'POLIVIA — Studio digital premium',template:'%s | POLIVIA'},description:'POLIVIA conçoit des sites internet premium, développe votre visibilité et crée des solutions d’automatisation adaptées à votre entreprise.',openGraph:{type:'website',locale:'fr_FR',siteName:'POLIVIA',title:'POLIVIA — Studio digital premium',description:site.tagline},robots:site.url.includes('example.com')?{index:false,follow:false}:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body><Header/><main id="contenu">{children}</main><Footer/></body></html>}
