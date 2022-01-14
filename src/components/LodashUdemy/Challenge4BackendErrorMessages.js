import React from "react";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";
import errorMessages from "./errorMessages";

const errorArray = {
  email: {
    errors: [
      {
        message: "Email is required",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain upper and lower case characters",
      },
      {
        message: "Must be at least 8 characters",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must equal password",
      },
    ],
  },
};

const Challenge4BackendErrorMessages = (props) => {
  const output = errorMessages(errorArray);

  const description = `Challenge 4 - Error Messages Array`;

  const codeBlock = `
const errorArray = {
  email: {
    errors: [
      {
        message: "Email is required",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain upper and lower case characters",
      },
      {
        message: "Must be at least 8 characters",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must equal password",
      },
    ],
  },
};


const errorList = (errorsArray) => {
  return map(errorsArray, (val) => {
    return val.message;
  }).join(", ");
};

const errorMessages = (errorMessageObject) => {
  return map(errorMessageObject, (val, key) => {
    return upperFirst(key) + ": " + errorList(val.errors);
  });
};


    const output = errorMessages(errorArray);

  `;

  return (
    <div>
      <FunctionInfo heading="Challenge 4" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Challenge 4 Output</h3>
            <div>{JSON.stringify(output)}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Challenge4BackendErrorMessages;
