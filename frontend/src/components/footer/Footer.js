import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FooterWrapperDiv,
    AllFooterLinks,
    TabsFollow,
    TabsShare,
    Signature,
    FootLink,
    FootLinks,
    SocialLinks,
    SocialTabs,
    AddressesDiv,
    StyledContactModal,
    FadingBackground,
    StyledStoreModal
} from './Footer.styles';
import { 
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialTwitter,
} from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { ModalProvider } from "styled-react-modal";

const Footer = () => {

    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [storesIsOpen, setStoresIsOpen] = useState(false)

    function toggleContact(e) {
        setContactIsOpen(!contactIsOpen);
      }

      function openStores(e) {
        setStoresIsOpen(!storesIsOpen);
      }

      const navigate = useNavigate();

      const handleNavigateTo = (destination) => {
        navigate(`/${destination}`)
      }
    

    return (
        <> 
        <ModalProvider backgroundComponent={FadingBackground}>
            <FooterWrapperDiv>
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v15.0" nonce="gi0i2cN5"></script>
                    <Signature><p>&copy;bagforeveryone 2022</p></Signature>
                        <AllFooterLinks>
                            <FootLinks>
                                <FootLink onClick={() => handleNavigateTo("team")}>Team</FootLink>
                                <FootLink onClick={openStores}>Find Us</FootLink>
                                <StyledStoreModal
                                    isOpen={storesIsOpen}
                                    onBackgroundClick={openStores}
                                    allowScroll = {false}
                                >
                                    <h1>Stores</h1>
                                    <p style={{paddingBottom: "2rem"}}>Our bagforeveryone-Shopperbags also can be discovered, touched and experienced in Shops. We are happy to announce our first cooperation with the shop “Esperanto” in Rapperswill, where our sustainable, fairly produced bags are accesible. Our goal is to support shops with a product, who care for sustainable products and to raise awareness.</p>
                                    <div>
                                    <h3>Esperanto's address</h3>
                                    <p>Esperanto Rapperswil</p>
                                    <p>Tiefenaustrasse</p> 
                                    <p style={{paddingBottom: "2rem"}}>28640 Rapperswil</p>
                                    </div>
                                    <h3>Is a Shopperbag from the store a donation?</h3>
                                    <p>After purchaising a bag, you wont receive a receipt of a donation. But with your bag, you automatically support the project in lesvos and the refugees who crafted the bags. There are no shipping costs, but you support the Shop Owner. As well as refugees in lesvos, we also want to support Shop Owners, who support sustainable and social products. With presenting our the bagforeveryone-Shopperbags they support us to spread the message about the situation in Lesvos.</p>
                                </StyledStoreModal>
                                <FootLink onClick={toggleContact}>Contact</FootLink>
                            </FootLinks>
                            <StyledContactModal
                                isOpen={contactIsOpen}
                                onBackgroundClick={toggleContact}
                                allowScroll = {false}
                            >
                                <h1>Contact</h1>
                                <p style={{width: "80%", textAlign:"center"}}>This project is a cooperation of the two Non-Profit Organizations #EducationEveryone (CH) und Starfish Foundation (GR).</p>
                                <AddressesDiv>
                                    <div>
                                        <h3>#EducationEveryone</h3>
                                        <p>#EducationEveryone</p>
                                        <p>c/o Markus Böniger</p>
                                        <p>Böndlerstrasse 2</p>
                                        <p>8803 Rüschlikon</p>
                                        <p>Switzerland</p>
                                        <p>info@educationeveryone.org</p>
                                    </div>
                                    <div>
                                        <h3>Starfish Foundation</h3>
                                        <p>Starfish Foundation</p>
                                        <p>Vournazon 25</p>
                                        <p>Mytilene</p>
                                        <p>81132</p>
                                        <p>Greece</p>
                                        <p>starfish@asterias-starfish.org</p>
                                    </div>
                                </AddressesDiv>
                            </StyledContactModal>
                            <SocialTabs>
                                <TabsFollow>
                                        <p>Follow</p>
                                        <SocialLinks>
                                            <a href="https://www.instagram.com/bag.foreveryone/">
                                                <SlSocialInstagram />     
                                            </a>  
                                            <a href="https://m.facebook.com/bagforeveryonelesvos/">
                                                <SlSocialFacebook />   
                                            </a>
                                        </SocialLinks>
                                </TabsFollow>
                                <TabsShare>
                                        <p>Share</p>
                                        <SocialLinks>
                                            <a href="https://www.instagram.com">  {  /* how do i share page on social media? */ }
                                                <SlSocialInstagram />     
                                            </a>
                                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbag-for-everyone.propulsion-learn.ch%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                                                <SlSocialFacebook />    
                                            </a>
                                            <a target="_blank" href="https://twitter.com/intent/tweet?url=https://bag-for-everyone.propulsion-learn.ch&text=Check%20out%20this%20website%20and%20do%20some%20good%20by%20buying%20something%20or%20making%20a%20donation..!">
                                                <SlSocialTwitter />    
                                            </a>
                                            <a target="_blank" href="whatsapp://send?text=https://bag-for-everyone.propulsion-learn.ch Check out this page" data-action="share/whatsapp/share">
                                                <SiWhatsapp />   
                                            </a>
                                        </SocialLinks>
                                </TabsShare>
                        </SocialTabs>
                    </AllFooterLinks>
                </FooterWrapperDiv>
            </ModalProvider>
        </>
    )
}

export default Footer