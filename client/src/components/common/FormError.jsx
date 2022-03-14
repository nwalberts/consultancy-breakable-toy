import React from "react";

import { ErrorMessage } from "@hookform/error-message";

import "./styles/formError.pcss";

const errorComponentHandler = ({ message, messages }) => {
  let theMessage = message;
  if (messages && messages.length > 0) {
    theMessage = messages.map((error) => error.message).join(", ");
  }
  if (theMessage) {
    return <p className="error">{theMessage}</p>;
  }
  return null;
};

export const FormError = ({ name, errors }) => (
  <ErrorMessage errors={errors} name={name} render={errorComponentHandler} />
);
