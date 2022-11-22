import styled from "styled-components";
import { BaseModalBackground } from "styled-react-modal";



export const PageContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 6rem;
`

export const NavigateContainer = styled.div`
    display: flex;
    justify-content: center;

    span {
        padding: 1rem;
        cursor: pointer;
    }
`

export const BackToCatalogContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    gap: 1rem;
    padding-bottom: 2rem;
    cursor: pointer;

    :hover{
            color: #DABC39;
        }
`

export const ProductContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 5rem;
`

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Avatar = styled.img`
    width: 300px;
    border-radius: 1rem;

`

export const ImageGallery = styled.div`
    display: flex;
    gap: 1rem;

`
export const GalleryItem = styled.img`
    width: 60px;
    border-radius: 1rem;
    cursor: pointer;

    :hover {
        opacity: 0.6;
    }

`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 500px;

`
export const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 20px;

    .Collapsible {
        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    .Collapsible__contentInner {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 16px;
        padding-bottom: 2rem;
    }

    .Collapsible__trigger {
        cursor: pointer;

        :hover{
            color: #DABC39;
        }
    }
    
`

export const Price = styled.span`
    text-transform: uppercase;
    font-size: 24px; 
    font-weight: 800;

`

export const DetailTitle = styled.div`
    /* padding-bottom: 1rem; */

`

export const Title = styled.div`
    font-weight: bold;
    color: #DABC39;
    font-size: 36px;
    text-transform: uppercase;

`

export const Colors = styled.div`
    display: flex;
    gap: 1rem;
     
    div {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;

        :hover {
            opacity: 0.2;
        }
    }
`

export const SpecialColors = styled.p`
    font-size: 16px;
    font-style: italic;
    margin: 0;
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AmountInCartInput = styled.input`
    max-width: 20%;
    padding: 0.5rem;
    text-align: center;
    font-size: 20px;
    border: 1px solid #DABC39;

`

export const ToCartButton = styled.button`
    max-width: 300px;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background: #DABC39;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    cursor: pointer;

    :hover {
            opacity: 0.6;
        }
`




export const StockAmount = styled.span`

`

export const ShareContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    

    
    :hover {
        color: #DABC39;
    }

`

export const FadingBackground = styled(BaseModalBackground)`
opacity: ${(props) => props.opacity};
transition: all 0.3s ease-in-out;
`;
