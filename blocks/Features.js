import React from "react";
import styled from "styled-components";
import { StyledCol } from "blocks/Col";

const StyledFeature = styled(StyledCol)`
  ${(props) => props.css}
  width: ${(props) => `${100 / props.numberOfFeatures}%`};
  text-align: center;

  img {
    max-width: 20%;
  }
`;

const Features = ({ features, ...props }) => {
  return (
    <>
      {features.map((feature) => (
        <StyledFeature {...props} numberOfFeatures={features.length}>
          <img src={feature.img} alt="" />
          <p className="title">{feature.title}</p>
          <p className="description">{feature.description}</p>
        </StyledFeature>
      ))}
    </>
  );
};

export default Features;
