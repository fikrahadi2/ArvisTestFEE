import React, {useState} from 'react'
import HomeSection from '../components/Home'
import ListBarang from '../components/ListBarang'
import DetailBarang from '../components/DetailBarang'
import Keranjang from '../components/Keranjang'
import LoginSection from '../components/Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection />
            {/*<LoginSection />*/}
            {/*<ListBarang />*/}
            {/*<DetailBarang />*/}
            {/*<Keranjang />*/}
            <Footer/>
        </>
    )
}

export default Home
