import React from "react";
import { flatten } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Flatten = () => {
  const sampleArray = flatten([
    [1, 2],
    [3, 4],
  ]);

  const description = `Flatten array example`;

  const codeBlock = `
  const sampleArray = flatten([[1,2], [3,4]]);
  `;

  return (
    <div>
      <FunctionInfo heading="Flatten" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Flattened Array</h3>
            <div>{JSON.stringify(sampleArray)}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Flatten;
