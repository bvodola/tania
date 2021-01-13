import React from "react";
import styled from "styled-components";
import { Section } from "blocks/index";

const StyledRow = styled.div`
  float: left;

  ${(props) =>
    props.variant === "container" && "padding-left: 10%; padding-right: 10%;"}

  ${(props) => props.mt && `margin-top: ${props.mt}`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}`}

  > .col {
    width: ${(props) => `${100 / props.children.length - 2}%`};
    @media (min-width: 901px) {
      margin-right: 1%;
      margin-left: 1%;
    }
  }

  > .col:first-child {
    @media (min-width: 901px) {
      margin-right: 2%;
      margin-left: 0;
    }
  }

  > .col:last-child {
    @media (min-width: 901px) {
      margin-right: 0;
      margin-left: 2%;
    }
  }

  ${(props) => props.css}
`;

const Row = (props) => (
  <StyledRow {...props} className={`row ${props.className}`}>
    {props.children.map((section) => (
      <Section {...section} />
    ))}
  </StyledRow>
);

export default Row;
