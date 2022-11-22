import styled from "styled-components";


export const StyledTeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 10px 10vw 0;
    height: 100%;
    justify-content: center;

    h2 {
        font-weight: 300;
        font-size: 40px;
        line-height: 49px;
        margin-bottom: 12px;
        /* identical to box height */
        
        text-align: center;
        text-transform: uppercase;
        
        color: #DABC39;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }

    .team {
        display: flex;
        flex-direction: row;  
        padding: 0 33px;
        h2, p {
            text-align: right;
            margin-right: 21px;
        }
        .images {
            display: flex;
            flex-direction: row;
            gap: 10px;
            height: 170px;
            margin-top: 30px;

            label {
                text-align: center;
                font-size: 12px;
                line-height: 14px;
                display: block;
            }
        }

    }

    .swiss {
        display: flex;
        flex-direction: row;    
        padding: 0 33px;
        h2, p {
            text-align: left;
            margin-left: 21px;
        }
    }

    .tailors {
        display: flex;
        flex-direction: row;    
        padding: 0 33px;
        h2, p {
            text-align: right;
            margin-right: 21px;
        }
    }
`;