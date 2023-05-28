import HomePage from './home/page'
import NavBar from './components/NavigationBar/NavBar'
import NavBarSmall from './components/NavigationBar/NavBarSmall'

export default function Home() {
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center pt-4 md:pt-6 xl:pt-10'>
        <NavBar />
        <NavBarSmall />
        <HomePage />
      </div>
    </>
  )
}
