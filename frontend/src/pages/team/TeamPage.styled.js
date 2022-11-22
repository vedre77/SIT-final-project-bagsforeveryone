import styled from "styled-components";

export const PageWrapper = styled.div `
width: 100vw;
height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
    }
`