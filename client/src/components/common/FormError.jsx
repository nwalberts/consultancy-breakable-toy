import React from "react";

import { ErrorMessage } from "@hookform/error-message";

import "./styles/formError.pcss";

const errorComponentHandler = ({ message, messages }) => {
  let displayMessage = message;
  if (messages && messages.length > 0) {
    displayMessage = messages.map((error) => error.message).join(", ");
  }
  if (displayMessage) {
    return <p className="error">{displayMessage}</p>;
  }
  return null;
};

export const FormError = ({ name, errors }) => (
  <ErrorMessage errors={errors} name={name} render={errorComponentHandler} />
);
