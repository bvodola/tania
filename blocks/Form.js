import React from "react";
import { Section } from "blocks/index";
import styled from "styled-components";

const StyledForm = styled.form`
  ${(props) =>
    props.variant === "panel" &&
    `
    background: #fff;
    border: 1px solid #125089;
    border-radius: 6px;
    padding: 10px;

    .panel-title {
      font-size: 14px;
      margin-bottom: 1em;
      background: #125089;
      color: #fff;
      padding: 0.5em;
      margin: -10px -10px 10px -10px;
      text-align: center;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
  `}
  ${(props) => props.css}
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  margin-top: 10px;
  background-color: #ec9314;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  ${(props) => props.fullWidth && "width: 100%;"}
  ${(props) => props.css}
`;

const Form = ({ children, ...props }) => {
  return (
    <StyledForm {...props}>
      <div className="panel-title">{props.title}</div>
      {children.map((section) => (
        <Section {...section} />
      ))}
      <Button {...props.submit_button} />
    </StyledForm>
  );
};

export default Form;
