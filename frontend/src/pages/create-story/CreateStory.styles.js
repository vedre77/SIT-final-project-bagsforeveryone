import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";
import { StoryWrapper } from "../story-page/StoryPage.styles";
import { UserHeader } from '../story-page/StoryPage.styles';

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.7);
    width: 100%;
    height: 100%;


    .modal-story-wrapper {
        margin: 0 auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 60%;
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
        padding: .1rem .4rem;
    }

    .select {
        padding: 1em;
        border: 1px solid lightgray;
        border-radius: 5px; 
        font-family: 'Montserrat', sans-serif;
    }

    .form-input {
            width: 50%;
            height: 2em;
            font-size: 1em;
        }

        textarea {
            width: 95%;
            height: 10em;
            font-size: 1em;
        }
`

export const CreateStoryUserHeader = styled(UserHeader)`
    align-self: flex-start;
    margin-top: 2em;
    margin-left: 2em;
    display: flex;
    gap: 1em;
`

export const FormWrapper = styled(StoryWrapper)`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 1em;
    gap: 1em;
    min-width: 60%;

    textarea {
        width: 95%;
        height: 10em;
    }

    .form-input {
        width: 95%;
    }
`

export const PostButton = styled(PageButton)`
    padding: .3rem 3rem;
`