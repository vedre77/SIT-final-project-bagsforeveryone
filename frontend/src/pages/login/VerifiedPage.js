import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Verified from '../../components/LoginSection/Verified/Verified'
import { PageWrapper } from './LoginPage.styled'

const VerifiedPage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Verified />
        <Footer />
    </PageWrapper>
  )
}

export default VerifiedPage;
