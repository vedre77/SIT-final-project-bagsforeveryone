import React from 'react'
import { useState } from 'react';
import  { ModalProvider } from "styled-react-modal";
import { useNavigate } from 'react-router-dom';
import { Statement, StyledModal, FadingBackground, 
Sentence, Reference } from './Mission.styles';

const MissionModal = () => {  

    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    setTimeout(() => navigate('/about'), 6000);

    const handleModal = () => {
      setIsOpen(!isOpen);
      navigate('/about');
    }

    return (
            <ModalProvider backgroundComponent={FadingBackground}>
                <StyledModal
                        isOpen={isOpen}
                        onBackgroundClick={handleModal}
                        allowScroll = {false}
                        onClick={handleModal}
                        >
                        <Statement>
                          <Sentence>
                            <span>'Shine</span>
                            <span>a</span>
                            <span> light </span>
                            <span>on</span>
                            <span>talents!</span>
                          </Sentence>
                          <Sentence>
                            <span>Bags</span>
                            <span>made</span>
                            <span>with</span>
                            <span>love</span>
                            <span>by</span>
                            <span>refugees</span>
                            <span>in</span>
                            <span>Lesvos &#9825;.'</span>
                          </Sentence>
                          <Reference>
                          <span>Team bagforeveryone, 2021.</span>
                          </Reference>
                        </Statement>
                        {/* <Statement>'We are living in the era of barbed wire and walls… please let us stop this shipwreck of civilization!'</Statement> */}
                        {/* 'We are living in the era of barbed wire and walls… please let us stop this shipwreck of civilization! */}
                        { /*  <p>Pope Francis when visiting camp for refugees in Moria, on the Greek island of Lesvos  </p> */ }
                </StyledModal>
            </ModalProvider>
    )
}

export default MissionModal