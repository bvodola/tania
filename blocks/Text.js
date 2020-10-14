import React from "react";
import styled from "styled-components";

const Text = (props) => {
  return <p style={props.style}>{props.content}</p>;
};

export default Text;
