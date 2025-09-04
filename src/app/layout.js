import { Inter } from 'next/font/google'
import './globals.css'
// import 'react-phone-input-2/lib/style.css'
import { Montserrat } from 'next/font/google'
import LayoutWrapper from './LayoutWrapper'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Starter',
  description: 'A Next.js starter project with Tailwind CSS',
}
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [
    '100', // Thin
    '200', // Extra Light
    '300', // Light
    '400', // Regular
    '500', // Medium
    '600', // Semi Bold
    '700', // Bold
    '800', // Extra Bold
    '900', // Black
  ],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="gr-c-s-loaded" content="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        
          <LayoutWrapper>{children}</LayoutWrapper>
          
        
      </body>
    </html>
  )
}
