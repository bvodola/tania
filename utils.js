import React from "react";
export const dashToPascal = (str) =>
  str
    .split("-")
    .map((w) => w[0].toUpperCase() + w.substr(1, w.length))
    .join("");

export const emailForm = (form_id, submit_button_text) => ({
  _block: "form",
  id: form_id,
  variant: "emailForm",
  submit_button: {
    children: submit_button_text,
  },
  children: [
    {
      _block: "field",
      name: "name",
      placeholder: "Nome",
      widget: "text",
      fullWidth: true,
    },
    {
      _block: "field",
      name: "email",
      placeholder: "Seu melhor email",
      widget: "text",
      fullWidth: true,
    },
  ],
});

export const addFormIdToChildFields = (formId, formChildren) => {
  return formChildren.map((c) => {
    if (c._block === "field") {
      return {
        ...c,
        formId,
      };
    }

    const cChildren = c.children
      ? addFormIdToChildFields(formId, c.children)
      : [];

    return {
      ...c,
      children: cChildren,
    };
  });
};

export const PageContext = React.createContext({});
