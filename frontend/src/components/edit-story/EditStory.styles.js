import styled from "styled-components";
import { StoryWrapper } from "../../pages/story-page/StoryPage.styles";

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;

    .modal-story-wrapper {
        margin: 1em;
        background-color: white;

        @media (min-width: 480px) {
            width: 90%;
            margin: 0 auto;
        }
        @media (min-width: 650px) {
            width: 75%;
            margin: 0 auto;
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
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

    .user-info-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
        margin: 1em 0;
    }

    .file-field {
        margin: 0 auto;
    }
`

export const FormWrapper = styled(StoryWrapper)`
    gap: 1em;
    padding: 1em;
`