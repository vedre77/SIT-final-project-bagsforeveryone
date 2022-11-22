import styled from "styled-components";

export const ValidateContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
`;

export const StyledValidateContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 39px;
height: 100%;
.rows {
    display: flex;
    flex-direction: row; 
    gap: 20px;
    .cols {
        display: flex;
        flex-direction: column;
        gap: 20px;        
    }   
}
`;