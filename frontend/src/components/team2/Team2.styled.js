import styled from "styled-components";

export const StyledTeam = styled.div`
display: flex;
flex-direction: column;  
align-items: center;
padding: 0 90px;
text-align: center;


.images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    .image {
        padding: 12px 0;
        background: linear-gradient(#FFFFFF 0%, #DABC39 100%);
        border-radius: 5px;
        width: 28%;
        max-width: 28%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-of-type(2) {
            img {
                max-width: 80%;
                height: auto;
            }
        }
        &:nth-of-type(3) {
            img {
                max-width: 99%;
                height: auto;
            }
        }
        label {
            text-align: center;
            font-size: 12px;
            line-height: 14px;
            display: block;
        }    
    }

}
`;
export const StyledTailorsSwiss = styled.div`
display: flex;
flex-direction: row;   
flex-wrap: nowrap; 
align-items: start;
gap: 20px;
.column {
    width: 25%;
    max-width: 25%;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    img {
        background: linear-gradient(#FFFFFF 0%, #DABC39 100%);
        border-radius: 5px;
        max-width: 277px;
        width: calc(100% - 8px);
        height: auto;
    }
    &:first-of-type {
        width: 20%;
        max-width: 20%;
    }
    h2 {
        margin-top: 0;
    }
}
`;

export const StyledTeamContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 1051px;
gap: 50px;

h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #DABC39;
}

p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}
`;