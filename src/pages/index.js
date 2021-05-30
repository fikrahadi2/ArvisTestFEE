import React, {useState} from 'react'
import HomeSection from '../components/Home'
import Navbar from '../components/Navbar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <HomeSection />
        </>
    )
}

export default Home
