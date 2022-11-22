import Modal, { BaseModalBackground } from "styled-react-modal";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function StockInfoModal(props) {

  const [isOpen, setIsOpen] = useState();
  const [opacity, setOpacity] = useState(0);
  const [scenario, setScenario] = useState();

  
  useEffect(() => {
    setIsOpen(props.isOpen)
    setScenario(props.scenario)

  }, [props.isOpen]);


  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
    props.onClick()
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        {
          scenario === "out of stock" ?
        <p> Unfortunately, this product is currently out of Stock!<br></br> We are working to make it <br></br>available again</p> : scenario === "low stock" ?
        <p> Unfortunately, the requested order quantity exceeds the currently available quantity. <br></br> Please reduce the quantity and we will work to make the product available again in larger quantity.</p>
        : null }
        <button onClick={toggleModal}>Ok</button>

      </StyledModal>
    </div>
  );
}

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  line-height: 1.5rem;
  display: flex;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;

  button {
    font-family: 'Montserrat', sans-serif;
    min-width: 20%;
    min-height: 12%;
    font-size: 18px;
    background: #DABC39;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
    
  }


  `;


