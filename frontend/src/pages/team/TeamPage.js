import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { PageWrapper } from './TeamPage.styled'
import Team2 from '../../components/team2/Team2'

const TeamPage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Team2 />
        <Footer />
    </PageWrapper>
  )
}

export default TeamPage

