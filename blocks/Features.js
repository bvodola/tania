import React from "react";
import styled from "styled-components";
import { StyledCol } from "blocks/Col";
import { Row, Col } from "blocks/index";

const StyledFeature = styled(Col)`
  ${(props) => props.css}
  width: ${(props) => `${100 / props.numberOfFeatures}%`};
  text-align: center;

  img {
    max-width: 20%;
  }
`;

const Features = ({ features, ...props }) => {
  return (
    <Row>
      {features.map((feature) => (
        <StyledFeature
          {...props}
          className={`col ${props.className}`}
          numberOfFeatures={features.length}
        >
          {feature.img && <img src={feature.img} alt="" />}
          <p className="title">{feature.title}</p>
          <p className="description">{feature.description}</p>
        </StyledFeature>
      ))}
    </Row>
  );
};

export default Features;
