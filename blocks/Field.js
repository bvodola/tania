import React from "react";
import styled from "styled-components";
import { PageContext } from "utils";

const Input = styled.input`
  ${(props) => props.fullWidth && "width: 100%;"}
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Field = (props) => {
  let FieldComponent;
  const pageState = React.useContext(PageContext);

  const handleChange = (ev) => {
    const val = ev.target.value;
    pageState.set(props.name, val);
  };

  switch (props.widget) {
    case "textarea": {
      FieldComponent = Input;
      break;
    }
    default: {
      FieldComponent = Input;
      break;
    }
  }

  return (
    <FieldComponent
      {...props}
      value={pageState.values[props.name] ?? ""}
      onChange={handleChange}
    />
  );
};

export default Field;
