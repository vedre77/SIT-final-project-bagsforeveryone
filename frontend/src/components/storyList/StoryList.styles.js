import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";
import { PageButton } from '../../styles/global.styles';
import { SlMagnifier } from 'react-icons/sl';

// mobile designs first //
export const StoryPageTitle = styled.h2 `
    margin: 0;
    padding: 0;
    font-weight: 500;
    margin-top: 2em;
    text-align: center;

    span {
        font-weight: 700;
    }
`

export const StoryPageWrapper = styled.section `
    display: flex;
    position: fixed;
    top: 10em;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start; 
    width: 90%;
    height: 73%;
    gap: .5em;
    padding: 1em .5em;
    border-radius: 7px;
   
    // whole searchbar with magnifier and post button:
    .search {
        z-index: 1;
        border: 2px solid lightgray;
        padding: 1em;
        margin: 0 auto;
        border-radius: 10px;
        background-color: white;
        position: sticky;
        top: 0;
        min-width: 300px;
        display: flex;
        justify-content: space-around;
        gap: 1em;
        margin: 2em auto;


        @media (min-width: 640px) {
            min-width: 65%;
            justify-content: space-between;
        }
    }

    // search from with magnifier:
    .search-form {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 70%;
    }

    // search-form:
    .search-field {
        width: 75%;
        max-width: 400px;
    }

    .search-story {
        min-width: 75%;
        min-height: 3rem; 
        padding: 0.3rem;
        border: none;
        border: 1px solid #D3D3D3;
        border-radius: 10px;
    }
    
    .search-form {
        justify-content: center;
    }
    
    .search-form {
        justify-content: center;
    }
`

export const MagnifierIcon = styled(SlMagnifier)`
    cursor: 'pointer';
    display: none;

    @media (min-width: 700px) {
        display: inline-block;
    }
`

// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `

    margin: 0 auto;

    @media (min-width: 420px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: .5em;
            padding: .5em;
    }

    @media (min-width: 865px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1.5em;
        padding: .5em;
    }
 `

export const FadingBackground = styled(BaseModalBackground)`
    color: #DABC39;
    .warning {
        background-color: white;
        border-radius: 20px;
        width: 20em;
        height: 20em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const LoginWarningModal = styled(Modal)`
   
`;

export const WarningModalProvider = styled(ModalProvider)`
`;
    
export const PostButton = styled(PageButton)`
    padding: 0 .2rem;
    font-size: 1em;

    @media (min-width: 700px) {
        padding: .1rem 1rem;
        font-size: 1.2em;
    }

    @media (min-width: 750px) {
        padding: .3rem 3rem;
    }
`;