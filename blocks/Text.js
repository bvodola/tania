import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  ${(props) => props.css}
`;

const StyledDiv = styled.div`
  ${(props) => props.css}
`;

const Text = (props) => {
  if (props.content === "string")
    return <StyledP {...props}>{props.content}</StyledP>;

  return <StyledDiv {...props}>{props.content}</StyledDiv>;
};

export default Text;
