import React from "react";
import styled from "styled-components";
import { Section } from "blocks/index";
import { PageContext } from "utils";

const StyledModal = styled.div`
  position: fixed;
  border: 1px solid #eee;
  width: 100%;
  height: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  top: 0;
  left: 0;

  @media (min-width: 901px) {
    width: 50%;
    height: auto;
    margin: 10% 25% 5%;
    padding: 10%;
  }
`;

const CloseButton = styled.div`
  text-align: right;
  position: absolute;
  top: 40px;
  right: 40px;
  font-weight: bold;
`;

const Modal = (props) => {
  const pageState = React.useContext(PageContext);
  const closeModal = () => {
    pageState.set(props.id, false);
  };

  if (pageState[props.id]) {
    return (
      <StyledModal>
        <CloseButton onClick={closeModal}>Fechar</CloseButton>
        {props.children.map((section) => (
          <Section {...section} />
        ))}
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
