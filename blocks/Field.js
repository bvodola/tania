import React from "react";
import styled from "styled-components";

const Input = styled.input`
  ${(props) => props.fullWidth && "width: 100%;"}
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Field = (props) => {
  let FieldComponent;

  switch (props.widget) {
    case "text": {
      FieldComponent = Input;
      break;
    }
    case "textarea": {
      FieldComponent = Input;
      break;
    }
  }

  return <FieldComponent {...props} />;
};

export default Field;
