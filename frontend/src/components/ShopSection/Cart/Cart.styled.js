import styled from "styled-components";


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

export const ProductContainer = styled.div`

    display: flex;
    gap: 1rem;

  img {
    width: 100px;
  }

  div {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

    }
`

export const AddRemoveContainer = styled.div`
        flex-direction: row !important;
        gap: 1.5rem !important;
        border: 1px solid #DABC39;

        div {
          padding: 0.5rem;
          cursor: pointer;
          
          :hover {
            color: #DABC39;
            
          }

        }
`