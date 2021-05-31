import React, {useState} from 'react'
import ListBarangSection from '../components/ListBarang'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const ListBarang = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ListBarangSection />
            <Footer/>
        </>
    )
}

export default ListBarang
