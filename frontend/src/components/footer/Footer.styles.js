import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export const FooterWrapperDiv = styled.div`

    /* border: 2px solid red; */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column-reverse;
    font-size: .8rem;

    p {
       margin: 0;
       padding: .4rem;
    }
    svg {
        margin: 0 .5em;
        color: #DABC39;
        font-size: 20px;

        :hover {
            color: black;
        }
    }

    @media (min-width: 790px) {
      flex-direction: row;
      align-items: center;
      font-size: 1rem;
    }

`;

export const AllFooterLinks = styled.div`
  /* border: 3px solid magenta; */

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
	}

  @media (min-width: 790px) {
    justify-content: space-between;
    width: 75%;
    }
`

export const SocialTabs = styled.div`
    /* border: 5px solid green; */
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    width: 100%;

    @media (min-width: 600px) {
      width: fit-content;
	  }

    @media (min-width: 790px) {
      border: none;
    }
`

export const TabsShare = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const TabsFollow = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

// SVG icons list:
export const SocialLinks = styled.div`
    display: flex;
`

export const Signature = styled.div`
    /* border: 1px solid magenta; */
    font-size: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2em;

    @media (min-width: 790px) {
      /* border: 1px solid red; */
      margin: 0;
      display: flex;
      justify-content: flex-start;
      width: 25%;
    }
`;

export const FootLinks = styled.div`
    // TEAM / FIND / CONTACT collectively
    display: flex;
    justify-content: space-around;
    padding: .5em 0;
    border-bottom: 1px solid lightgray;

    @media (min-width: 600px) {
      /* border: 1px solid blue; */
      align-items: center;
      width: 50%;
	  }

    @media (min-width: 790px) {
      border: none;
      /* border: 1px solid blue; */
      width: 100%;
    }
   
`

export const FootLink = styled.div`
    // TEAM / FIND / CONTACT individually
    
`

export const AddressesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 450px) {
        flex-direction: column;
    }
`;

export const StyledContactModal = styled(Modal)`

  display: flex;
  max-width: 30%;
  align-items: center;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
  }


  h1 {
    font-size: 30px;
    color:#DABC39;
    margin: 0;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
  }

    p {
     font-size: 14px;
     margin-top: 0;
     margin-bottom:0;
     color: #000000;
    }

    @media only screen and (max-width: 900px) {
        height: 30vh;
        width: 70vw;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;  
        }

        p {
            font-size: 10px;
           }
    }      
`;

export const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(33, 33, 33, 0.7);
`; 

export const StyledStoreModal = styled(Modal)`
  max-width: 30%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 30px;
    color:#DABC39;
    margin-bottom: 0;
    margin-top: 5px;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
    margin-top: 5px;
  }

    p {
     font-size: 14px;
     margin-top: 0;
     
     color: #000000;
    }

    @media only screen and (max-width: 900px) {
        height: 55vh;
        width: 70vw;
        margin-top: 5vh;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;   
        }

        p {
            font-size: 10px;
           }
    }      
`;