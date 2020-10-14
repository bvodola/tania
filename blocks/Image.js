import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  ${(props) => props.css}
`;

export default Image;
