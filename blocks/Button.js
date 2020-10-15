import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  align-self: baseline;

  ${(props) =>
    props.variant === "primary" &&
    `
      background-color: #125089;
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

  ${(props) => props.css}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
