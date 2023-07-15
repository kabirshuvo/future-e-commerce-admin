import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'
import Authprovider from './components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Future e-Commerce',
  description: 'Future e-Commerce for online shopping and gifts',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Authprovider>

        {children}
        </Authprovider>
        
        </body>
    </html>
  )
}
