import {  Outlet } from "react-router-dom"
import { Footer, Header } from "../../components"



const Layout = () => {
  return (
    <div className='app bg-slate-800 text-white'>

    <header>
    <Header/>
    </header>

    <main>
    <Outlet/>
    </main>

    <footer>
    <Footer/>
    </footer>
  </div>
  )
}

export default Layout