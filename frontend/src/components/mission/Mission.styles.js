import styled, { keyframes } from "styled-components";
import Modal from "styled-react-modal";
import { BaseModalBackground } from "styled-react-modal";

export const Statement = styled.h1`
    font-size: 3em;
    margin: 0 auto;
    animation-name: scale;
    animation-duration: 2s;
    text-align: center;
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

    @keyframes scale {
        100% {
            transform: scale(1);
        }
    }

    span {
        display: inline-block;
        opacity: 0;
        // word spacing! :
        margin: .12em;
        filter: blur(4px);
    }

    span:nth-child(1) {
        animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(2) {
        animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(3) {
        animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(4) {
        animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(5) {
        animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(6) {
        animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(7) {
        animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(8) {
        animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(9) {
        animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(10) {
        animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(11) {
        animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(12) {
        animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(13) {
        animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(14) {
        animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    @keyframes fade-in {
        100% {
            opacity: 1;
            filter: blur(0);
        }
    }

`
export const Sentence = styled.div `
   
    
`

export const Reference = styled.div `
    font-size: .3em;
    margin: 2em 5em;

`

export const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(30, 30, 30, 0.95);
`; 

export const StyledModal = Modal.styled`
   color: #DABC39;
   background-color: 'rgba(30, 30, 30, 0.95)';   
`

// import styled, { keyframes } from "styled-components";
// import Modal from "styled-react-modal";
// import { BaseModalBackground } from "styled-react-modal";

// export const Statement = styled.h3`
//     animation-name: flyin;
//     animation-duration: 2s;
//     /* animation-iteration-count: infinite; */

//     @keyframes flyin {
//         0% {
//             transform: translateX(200%);
//         }
//         100% {
//             transform: translateX(0%);
//         }

//     }

// `

// export const FadingBackground = styled(BaseModalBackground)`
//   background-color: rgba(30, 30, 30, 0.95);
// `; 

// export const StyledModal = Modal.styled`
//   width: 70vw;
//   height: 50vh;
//   display: flex;
//   flex-direction: collumn;
//   justify-content: flex-start;
//   align-items: left;
//   color: #DABC39;
//   background-color: 'rgba(30, 30, 30, 0.95)';
//   transition : all 0.3s ease-in-out;
//   font-family: 'Montserrat', sans-serif;
  
//   h3 {
//     font-size: 50px;
// }
//     p {
//      font-size: 14px;
//     }

//     @media only screen and (max-width: 450px) {

//         h3 { 
//             font-size: 30px;
//             width: 250px;
//         }

//         p {
//             font-size: 18px;
//            }
//     }      
// `