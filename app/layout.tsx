import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Raleway } from 'next/font/google'
// const font = localFont({
//   src: './Recoleta.otf',
// })

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

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
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}