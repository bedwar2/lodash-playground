import React from "react";
import { random } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const RandomNumbers = () => {
  const randomIntBetween0and1000 = random(0, 1000);
  const randomFloatBetween0and100 = random(0, 100, true);

  const description = `Random Numbers example`;

  const codeBlock = `
  const randomIntBetween0and1000 = random(0,1000);
  const randomFloatBetween0and100  =  random(0,100,true);
  `;

  return (
    <div>
      <FunctionInfo heading="Random Function" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Random Numbers</h3>
            <div>Integer: {randomIntBetween0and1000}</div>
            <div>Float: {randomFloatBetween0and100}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default RandomNumbers;
