import React, {useState} from 'react'
import KeranjangSection from '../../components/Keranjang'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

const Keranjang = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <KeranjangSection />
            <Footer/>
        </>
    )
}

export default Keranjang
