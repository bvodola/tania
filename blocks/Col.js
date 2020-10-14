import React from "react";
import styled from "styled-components";
import { Section } from "blocks/index";

export const StyledCol = styled.div`
  float: left;
  ${(props) => props.css}

  @media (max-width: 900px) {
    width: 100% !important;
  }
`;

const Col = (props) => (
  <StyledCol {...props} className="col">
    {props.children.map((section) => (
      <Section {...section} />
    ))}
  </StyledCol>
);

export default Col;
