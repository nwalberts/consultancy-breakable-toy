import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { FieldError } from "react-hook-form";

import "./styles/formError.pcss";

interface FormErrorProps {
  name: string;
  errors: {
    experiencePoints?: FieldError;
    name?: FieldError;
    species?: FieldError;
    specialPower?: FieldError;
    imageUrl?: FieldError;
  };
}

interface ErrorComponentHandlerProps {
  message: string;
  messages: { message: string }[];
}

const errorComponentHandler: React.FC<ErrorComponentHandlerProps> = ({ message, messages }) => {
  let displayMessage = message;
  if (messages && messages.length > 0) {
    displayMessage = messages.map((error) => error.message).join(", ");
  }
  if (displayMessage) {
    return <p className="error">{displayMessage}</p>;
  }
  return null;
};

export const FormError: React.FC<FormErrorProps> = ({ name, errors }) => (
  <ErrorMessage errors={errors} name={name} render={errorComponentHandler} />
);
