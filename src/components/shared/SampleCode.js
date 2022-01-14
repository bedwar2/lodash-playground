import React from "react";
import { head } from "lodash";

export const SampleCode = (props) => {
  return (
    <pre>
      {`
Sample Code`}
      {props.additionalTitle ? props.additionalTitle : ""}
      {`\n----------------------------------------------`}
      {head(props.code) !== "\n" ? "\n" : null}
      {props.code}
    </pre>
  );
};
