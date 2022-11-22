import styled from "styled-components";
import { BaseModalBackground } from "styled-react-modal";

export const PageSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: fixed; */
    width: 100%;
    margin-top: 20rem;
`;

export const StickyCartContainer = styled.div`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  bottom: 8rem;
  width: 10rem;
  height: 7rem;
  align-self: flex-end;
  cursor: pointer;
  
  div {
    display: flex;
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background: #DABC39;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: black;
  }

  @media screen and (max-width: 1400px)  {
    right: 0;
    top: 5rem;
    flex-direction: column;
    height: 10rem;

    :hover {
      width: 8rem;
     }
    }

    @media screen and (max-width: 830px)  {
    right: 1rem;
    top: 1rem;
    flex-direction: row;
    height: 10rem;

    :hover {
      width: 8rem;
     }
    }

`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
   
    p {
      display: flex;
      justify-self: center;
      align-self: center;
      font-size: 24px;
      text-align: center;
      padding-left: 3rem;
    }

    .arrow {
      padding: 1rem;
      justify-self: flex-start;
      align-self: flex-start;
      cursor: pointer;

      :hover {
        color: #DABC39;
      }
    }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  `

export const ProductContainer = styled.div`

    display: flex;
    gap: 1rem;

  img {
    display: block;
    max-width: 40%;
  }

  div {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

    }


`

export const AddRemoveContainer = styled.div`
        flex-direction: row !important;
        gap: 1.5rem !important;
        border: 1px solid #DABC39;

        div {
          padding: 0.5rem;
          cursor: pointer;
          
          :hover {
            color: #DABC39;
            
          }

        }
`

export const SidebarFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SubTotalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
padding-bottom: 5rem;
font-size: 24px;
`

export const CheckoutContainer = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
  background: #DABC39;
  padding: 0.5rem 0;
  cursor: pointer;

  :hover {
    opacity: 0.4
  }

`

export const FadingBackground = styled(BaseModalBackground)`
opacity: ${(props) => props.opacity};
transition: all 0.3s ease-in-out;
`;



