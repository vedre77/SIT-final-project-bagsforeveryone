import styled from "styled-components";


export const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    p {
      font-size: 1.5em;
      padding: 0 3rem;
    }
    justify-content: center;
    text-align: center;
`;

export const CatalogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    max-width: 50%;
    padding-bottom: 6rem;

    @media screen and (max-width: 1300px)  {
      grid-template-columns: 1fr;
      gap: 0;
    }

    @media screen and (max-width: 700px)  {
      padding: 0;
    }
`