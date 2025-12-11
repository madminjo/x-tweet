// src/app/layout.tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans', // вы используете переменную в globals.css
  display: 'swap'
})

export const metadata: Metadata = {
  title: { template: '%s - X App', default: '' },
  description: 'Front-end insights, styled like X.com'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Класс переменной применяем к html — это гарантирует одинаковую разметку на сервере и клиенте
    <html lang="en" className={geistSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
