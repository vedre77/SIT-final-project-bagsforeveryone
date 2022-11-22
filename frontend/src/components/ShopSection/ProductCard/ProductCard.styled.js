import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  :hover span {
    color: #dabc39;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  
  img {
    /* display: block;*/
    display: block;
    width: 300px;
  }

    .hide {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      color: white;
      font-size: 28px;
      padding: 1rem;
      display: flex;
      justify-content: center;
      background-color: rgba(0,0,0, 0.3);
      :hover {
        opacity: 1;
      }
    }

`;

export const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 36px;
`;

export const Price = styled.p`
  text-align: center;
  margin: 0;
  font-size: 28px;
`;
