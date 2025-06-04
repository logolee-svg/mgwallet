import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'MoneyGram Wallet',
  description: 'Your Money, Your Way – No Bank Needed',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#fff'
      }}>
        {children}
      </body>
    </html>
  )
} 