import { Noto_Sans_Cham } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';
const non = Noto_Sans_Cham({subsets:['latin-ext']})

export const metadata = {
  title: 'JARA MOTORS',
  description: 'Sitio Web Taller Mecanico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning={true} className={non.className}>
        <Header/>
      
        
        {children}
        <Analytics />

        <Footer/>


        
        
        
        
        </body>
    </html>
  )
}
