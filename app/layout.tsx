import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
// const font = localFont({
//   src: './Recoleta.otf',
// })
import { Raleway } from 'next/font/google'
const font = Raleway({ 
  subsets: ['latin'],
  weight: '400' 
})  

export const metadata: Metadata = {
  title: 'Mercury Store',
  description: 'A E-Commerce Store by Mercury',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}