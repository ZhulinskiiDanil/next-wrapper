import './globals.scss'

export const metadata = {
  title: 'Create Next App Wrapper',
  description: 'Generated by create next app wrapper'
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
