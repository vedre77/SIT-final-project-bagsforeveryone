import styled from "styled-components";



export const PageContainer = styled.div`
display: flex;
min-width: 100%;
flex-direction: column;
padding-top: 15rem;
align-items: center;
justify-content: center;
`


export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
padding: 1rem;
`


export const ElementContainer = styled.div`
display: flex;
gap: 1rem;
padding: 1rem;

img {
  width: 5rem;
}

button {
  font-family: 'Montserrat', sans-serif;
  background: #DABC39;
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }

}

`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

p {
  margin: 0;
}

span {
  font-weight: bold;
}

label {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 25%;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 18px;
    border: 1px solid #DABC39;
    border-radius: 0.5rem;
    
  }
}

`

export const IntroText = styled.div`
  font-size: 28px;
  padding: 1rem;

`

// font-family: 'Montserrat', sans-serif;
// min-width: 20%;
// min-height: 12%;
// font-size: 18px;
// background: #DABC39;