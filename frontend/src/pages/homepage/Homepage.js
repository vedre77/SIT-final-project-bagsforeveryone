import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Homepage.styles'

const Homepage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Footer />
    </PageWrapper>
  )
}

export default Homepage

