import React from "react";
import styled from "styled-components";
import { Section } from "blocks/index";

const StyledRow = styled.div`
  float: left;
  width: 100%;
  ${(props) =>
    props.variant === "container" && "padding-left: 10%; padding-right: 10%;"}

  ${(props) => props.mt && `margin-top: ${props.mt}`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}`}

  > .col {
    width: ${(props) => `${100 / props.children.length}%`};
  }

  ${(props) => props.css}
`;

const Row = (props) => (
  <StyledRow {...props} className="row">
    {props.children.map((section) => (
      <Section {...section} />
    ))}
  </StyledRow>
);

export default Row;
