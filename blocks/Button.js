import React from "react";
import styled from "styled-components";
import { PageContext } from "utils";

const StyledButton = styled.button`
  padding: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  align-self: baseline;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === "primary" &&
    `
      background-color: #125089;
      color: #fff;
  `}

  ${(props) =>
    props.variant === "green" &&
    `
      background-color: #4caf50;
      color: #fff;
  `}

  ${(props) =>
    props.variant === "blue" &&
    `
      background-color: #03a9f4;
      color: #fff;
  `}

  ${(props) =>
    props.variant === "orange" &&
    `
      background-color: #ec9314;
      color: #fff;
  `}

  ${(props) =>
    props.variant === "darkRed" &&
    `
      background-color: #b80034;
      color: #fff;
  `}

  ${(props) =>
    props.disabled &&
    `
      opacity: 0.5;
  `}

  ${(props) => props.css}
`;

const Button = (props) => {
  const pageState = React.useContext(PageContext);
  const onClick = (ev) => {
    if (typeof props.onClick === "string") {
      if (props.onClick.startsWith("openModal:")) {
        const modalId = props.onClick.replace("openModal:", "");
        pageState.set(modalId, true);
        return;
      }

      if (props.onClick.startsWith("whatsapp:")) {
        const phone = props.onClick.split("whatsapp:")[1];
        location.href = `http://wa.me/${phone}`;
        return;
      }
    }

    props.onClick(ev);
  };

  return (
    <StyledButton
      {...props}
      onClick={props.onClick && onClick}
      disabled={pageState.values.isButtonLoading}
    >
      {pageState.values.isButtonLoading
        ? "Carregando..."
        : props.text || props.children}
    </StyledButton>
  );
};

export default Button;
