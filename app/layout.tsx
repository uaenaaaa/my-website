import './globals.css'
import { Poppins } from 'next/font/google'
import NavBar from './components/NavigationBar/NavBar'
import NavBarSmall from './components/NavigationBar/NavBarSmall'

const poppins = Poppins(
  { 
    weight: [
      '400',
      '500',
      '600',
      '700'
    ],
    style: 'normal',
    subsets: ['latin']
  },
)

export const metadata = {
  title: 'Froilan | Software Engineer',
  description: 'Personal Website of Froilan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        <NavBarSmall/>
        {children}
      </body>
    </html>
  )
}
