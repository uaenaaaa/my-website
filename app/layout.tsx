import './globals.css'
import { Poppins } from 'next/font/google'
import NavBar from './components/NavigationBar/NavBar'
import NavBarSmall from './components/NavigationBar/NavBarSmall'
import { Analytics } from '@vercel/analytics/react';
import Providers from './components/ThemeProvider';

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
      <body className={
        `${poppins.className}
        gap-5
        pt-4
        md:pt-6
        xl:pt-10
        w-full
        justify-center
        flex
        flex-col
        items-center`}>
        <Providers>
          <NavBar/>
          <NavBarSmall/>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
