import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Validate from '../../components/LoginSection/Validate/Validate'
import { PageWrapper } from './LoginPage.styled'

const ValidatePage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Validate />
        <Footer />
    </PageWrapper>
  )
}

export default ValidatePage
