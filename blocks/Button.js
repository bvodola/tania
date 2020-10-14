import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.variant === "primary" &&
    `
    margin-top: 10px;
    background-color: #125089;
    color: #fff;
    align-self: baseline;
  `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
