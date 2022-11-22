import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Login from '../../components/LoginSection/Login/Login'
import { PageWrapper } from './LoginPage.styled'

const LoginPage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Login />
        <Footer />
    </PageWrapper>
  )
}

export default LoginPage

