import styled from "styled-components";
import { PageButton } from '../../styles/global.styles'

export const StyledInput = styled.input`
font-family: 'Montserrat';
width: 365px;
height: 50px;
box-sizing: border-box;
background-color: #FFFFFF;
border: 3px solid #DABC39;
border-radius: 15px;
font-size: 24px;
padding-left: 36px;

&::placeholder {
    color: #969595;
    font-style: normal;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    
    }

`;

export const LoginButton = styled(PageButton)`
    padding: .3rem 3rem;
`

export const StyledLoginSectionContainer = styled.div`
    padding-top: 5rem;
    background-color: #FAF5E1;
    display: flex;
    height: 100%;
`;

export const StyledTitle = styled.div`
text-align: center;
color: #000000;
font-size: 24px;
font-weight: 500;
line-height: 29px;
`;

export const StyledText = styled.div`
color: #000000;
font-size: 20px;
font-weight: 500;
line-height: 24px;

a {
    color: #000000;
    font-weight: bold;
}
`;

export const StyledTextV = styled.div`
color: #DABC39;
font-size: 24px;
font-weight: 400;
line-height: 29px;
font-style: bold;
`;

export const ErrorContainer = styled.div`
    color: #979797;
    padding: 24px;
    font-size: 18px;
    font-weight: bold;
`;