import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import LoginLayout from '../components/Login'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LoginLayout />
            <Footer/>
        </>
    )
}

export default Login
