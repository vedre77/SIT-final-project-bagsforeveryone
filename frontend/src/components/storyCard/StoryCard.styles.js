import styled from "styled-components";

// single story wrapping container:
export const StoryWrapper = styled.section `
    margin-bottom: 1em;
    position: relative;

    // title display:
    h3 {
        position: absolute;
        text-align: center;
        opacity: 1;
        font-size: 1em;
        color: white;
        text-shadow: 2px 2px 2px black;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    // to activate show on hover, set opacity
    // of h3 to 0 and use this code:
    @media (min-width: 480px) {

            h3 {
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 1em;
                font-size: 2em;
                opacity: 0;
            }

            h3:hover{
                opacity: 1;
                cursor: pointer;
            }
	}

    // set image for responsiveness and equal size:
    img {
        display: block;
        max-width: 100%;
        margin: -.5em auto;
        width: 360px; 
        aspect-ratio: 1 / 1;
        object-fit: cover; 
        object-position: 100% 0;
    }
`