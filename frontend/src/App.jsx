import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from "./components/ScrollTop/ScrollToTop";

function App() {
  
  return (
    <>
     <ScrollToTop/>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
