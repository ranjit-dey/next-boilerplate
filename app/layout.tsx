import { inter } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Digital Project',
    description: 'Created by kna digital',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
