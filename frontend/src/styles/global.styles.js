import styled, { createGlobalStyle } from "styled-components";

// ------------------- GLOBAL STYLES ------------------

export const GlobalStyle = createGlobalStyle`
    body, #root {
        font-family: 'Montserrat', sans-serif;
        /* background: pink; */
        display: flex;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        width: 100%;

        *{
            box-sizing: border-box;
        }
        button {
            cursor: pointer;
        }

        img {
            cursor: pointer;
        }
    }
    // hamburger icon in mobile size (it is
    // a flex item):
    .hamburger {
        box-sizing: content-box !important;
        padding: .5em;
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 5px;
        color: #DABC39;
        align-self: flex-start;
        position: fixed;
        z-index: 2;
        left: .8em;
        top: .8em
    }

    .hamburger-footer {
        box-sizing: content-box !important;
        padding: .5em;
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 5px;
        color: #DABC39;
        align-self: flex-start;
        position: fixed;
        bottom: .8em;
        left: .8em;
        z-index: 2;
    }

    textarea, .form-input {
        font-family: 'Montserrat', sans-serif;
    }

    // this applies to file input form button:
    input::file-selector-button {
        background-color: #DABC39;
        border: 3px solid #DABC39;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 1.2em;
    }
`;

export const PageButton = styled.button`
    background: #DABC39;
    border: 3px solid #DABC39;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.2em;

    :active {
        transform: scale(0.9);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    :hover {
        opacity: 0.5;
    }
   
`

    
