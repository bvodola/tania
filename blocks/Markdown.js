import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledMarkdown = styled(ReactMarkdown)`
  float: left;
  width: 100%;
  ${(props) => props.css}
`;

const Markdown = ({ content, ...props }) => {
  return <StyledMarkdown {...props} source={content} />;
};

export default Markdown;
