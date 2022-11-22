import styled from "styled-components"
import { OptionsMenu, UserButton } from "../../pages/story-page/StoryPage.styles";

export const CommentWrapper = styled.div`
    border: 1px solid lightgray;
    margin-top: 1rem;
    padding: .2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.3em;

    .comment-header {
        display: flex;
        align-self: flex-start;
        align-items: center;
        justify-content: center;
        gap: 1em;
        margin: .5em;
    }

    .commenter-info {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 40px;
    }

    p {
        border: 1px solid lightgrey;
        width: 95%;
        padding: 1em;
    }

`

export const CommenterButton = styled(UserButton) `
    align-self: flex-end;
    margin: .5em .5em 0 0;
`

export const CommentOptionsMenu = styled(OptionsMenu) `
    top: 2em;
    right: 1em;
`