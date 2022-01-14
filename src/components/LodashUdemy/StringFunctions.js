import React from "react";
import {
  toLower,
  join,
  split,
  chain,
  capitalize,
  camelCase,
  snakeCase,
} from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const StringFunctions = () => {
  const quizString = "This is a super quiz";

  const slugString = chain(quizString).toLower().split(" ").join("-").value();

  const description = `String functions with chaining example`;

  const codeBlock = `
const quizString = "This is a super quiz";

const slugString = chain(quizString)
    .toLower()
    .split(' ')
    .join('-')
    .value();

  `;

  const city = capitalize("baltimore");

  const camelCaseStr = camelCase("This is camel case");
  const snakeCaseStr = snakeCase("This is snake case");

  const codeBlock3 = `
 const camelCaseStr = camelCase("This is camel case");
 const snakeCaseStr = snakeCase("This is snake case");  
  `;

  return (
    <div>
      <FunctionInfo heading="String Functions" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Slug String Value</h3>
            <div>{slugString}</div>
          </>
        }
      ></ExecutionOutput>

      <SampleCode code={`const city = capitalize("baltimore");`} />
      <ExecutionOutput componentHtml={<p>{city}</p>} />

      <SampleCode code={codeBlock3} />
      <ExecutionOutput
        componentHtml={
          <>
            <p>
              {camelCaseStr}
              <br />
              {snakeCaseStr}
            </p>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default StringFunctions;
