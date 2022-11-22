import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";

export const CloseButton = styled(PageButton) `
    margin: 1em 0 1em 1em;
    padding: .02rem .4rem;
    align-self: flex-start;
`

export const DarkBackground = styled.div `
    position: fixed;
    display: inline-block;
    overflow-y: scroll;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
`

export const StoryWrapper = styled.section `
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    @media (min-width: 800px) {
        max-width: 75%;
    }
    
    .modal-story-wrapper {
        display: flex;
        flex-direction: column;
        font-size: .8em;
        padding: 1em;
        border-radius: 5px;
        min-width: 90%;
    }

    // story text:
    .story-content {
        line-height: 1.5em;
        margin: .5em 0;
        padding: 1em;
        text-align: justify;

        @media (min-width: 480px) {
            font-size: 1.2em;
        }

        @media (min-width: 780px) {
            font-size: 1.5em;
	    }
    }

    h2 {
        text-align: center;
    }
`

export const ContentWrapper = styled.div `
    border: 1px solid lightgray;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const UserHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3em;

    img {
        // user avatar:
        width: 50px;
        margin: 0;
    }

    .user-display {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .user-info {
        display: flex;
        flex-direction: column;
    }
`
// Part with react icon and settings to edit or delete story:
export const UserButton = styled.div `
    position: relative;
    display: flex;
    gap: .5em;
    justify-content: center;
    align-items: center;
    align-self: flex-start;

    :active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    // react 3 dot icon:
    .options-icon {
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: .1rem;
        width: 20px;
        height: 20px;

        @media (min-width: 780px) {
            width: 25px;
            height: 25px;
	    }
    }
`

export const OptionsMenu = styled.div `
    position: absolute;
    display: flex;
    gap: .2rem;
    top: 2em;
    flex-direction: column;
    margin: .2rem;
`

export const StoryImages = styled.section `
    img {
        display: block;
        max-width: 200px;
        margin: 1em auto;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
`

export const FullImageModal = styled.div `
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;
`

export const Image = styled.img `
    max-height: 95%;
    max-width: 95%;
    display: block;
    margin: 0 auto;   
`

export const CloseModalButton = styled(PageButton) `
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 1em;
    margin-left: 1em;
`

export const FadingBackground = styled(BaseModalBackground)`
    color: #DABC39;
    .delete-warning {
        padding: 2em;
        background-color: white;
        border-radius: 20px;
        width: 20em;
        height: 20em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const DeleteWarningModal = styled(Modal)`

`;

export const DeleteModalProvider = styled(ModalProvider)`
`;

export const CommentButton = styled(PageButton)`
    margin: 1em auto;
    padding: .5em 1em;
    font-size: 1.2;
`;

export const Comments = styled.div `
    padding: 2em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`