import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monster Loots Search [Ragnarok Landverse] - Jaynarol',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" data-mode="dark">
    <body className={`${inter.className} bg-gray-900`}>{children}</body>
  </html>
)

export default RootLayout
