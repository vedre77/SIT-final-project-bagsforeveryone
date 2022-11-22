import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Register from '../../components/LoginSection/Register/Register'
import { PageWrapper } from './LoginPage.styled'

const RegisterPage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Register />
        <Footer />
    </PageWrapper>
  )
}

export default RegisterPage
