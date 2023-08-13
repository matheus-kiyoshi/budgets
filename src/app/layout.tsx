import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budgets',
  description: 'Make and manage budgets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen grid grid-layout-template gap-2">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
