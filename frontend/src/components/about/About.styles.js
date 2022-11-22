import styled from "styled-components";

export const AboutContainerDiv = styled.div`
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    margin-top: 7em;
    margin-bottom: 6em;
    flex-direction: column;

    @media only screen and (max-width: 770px) {
        // up to the NAVBAR!!!
        margin-top: 3.5em;
    }
`;

export const ImageSliderDiv = styled.div`
    position: relative;
    /* border: 3px solid red; */
    width: 75%;

    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

export const StickyButtonDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0;
    top: 50%;
    height: 70px;
    width: 30px;
    color: white;
    border-radius: 0 5px 5px 0;
    background-color: rgba(225, 194, 59, 0.9);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    :hover{
     background-color: #DABC39;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        transform: rotate(-90deg);
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
    }
`;

export const TextBoxDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    max-width: 80vw;
    overflow: hidden;
    text-align: center;
    
    h1 {
        color: #DABC39;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        margin: 1rem 0;
        align-self: center;
    }

    p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        text-align: center;
        max-width: 80%;
        margin: 2rem auto;
        
    }
`;

export const leftArrowStyles = {
    position: 'absolute',
    top: 'calc(50% + 5rem)',
    transform: 'translate(0, -50%)',
    left: '1rem',
    fontSize: '5em',
    color: '#fff',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50px'
}

export const rightArrowStyles = {
    position: 'absolute',
    top: 'calc(50% + 5rem)',
    transform: 'translate(0, -50%)',
    right: '1rem',
    fontSize: '5em',
    color: '#fff',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50px'
}

