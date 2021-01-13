import React from "react";
import { Button, Section } from "blocks/index";
import styled from "styled-components";
import { PageContext, addFormIdToChildFields } from "utils";
import FaunaSauce from "fauna-sauce";

const fauna = new FaunaSauce("fnAD4LGT9eACBl0J2hNXFrh3dgkdF7bO_snH7hKD");

const StyledForm = styled.form`
  ${(props) =>
    props.variant === "panel" &&
    `
    background: #fff;
    border: 1px solid #125089;
    border-radius: 6px;
    padding: 10px;

    .title {
      font-size: 14px;
      margin-bottom: 1em;
      background: #125089;
      color: #fff;
      padding: 0.5em;
      margin: -10px -10px 10px -10px;
      text-align: center;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
  `}
  ${(props) => props.css}
`;

const Form = ({ children, ...props }) => {
  const pageState = React.useContext(PageContext);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    pageState.set("isButtonLoading", true);
    await fauna.create("form_entries", {
      ...pageState.values,
      created_at: Date.now(),
    });
    pageState.clear();
    pageState.set("isButtonLoading", false);
    if (props.redir) {
      location.href = props.redir;
    }
  };

  const formChildren = addFormIdToChildFields(props.id, children);

  return (
    <StyledForm {...props} onSubmit={handleSubmit}>
      <div className="title">{props.title}</div>
      {formChildren.map((block) => (
        <Section {...block} />
      ))}
      {props.submit_button && <Button {...props.submit_button} type="submit" />}
    </StyledForm>
  );
};

export default Form;
