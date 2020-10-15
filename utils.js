import React from "react";
export const dashToPascal = (str) =>
  str
    .split("-")
    .map((w) => w[0].toUpperCase() + w.substr(1, w.length))
    .join("");

export const emailForm = (submit_button_text) => ({
  _block: "form",
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

export const PageContext = React.createContext({});
