import './globals.css'

export const metadata = {
  title: 'Ashley Muleya | Portfolio',
  description: 'IT Support • Software Developer • Tech Innovator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}