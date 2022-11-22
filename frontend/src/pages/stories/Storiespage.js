import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { PageWrapper } from './Storiespage.styles'
import StoryList from '../../components/storyList/StoryList'

const Storiespage = () => {

  return (
    <PageWrapper>
        <Navbar />
        <StoryList />
        <Footer />
    </PageWrapper>
  )
}

export default Storiespage

