import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div
          className='bg-primary-1200 h-screen flex flex-col'
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
