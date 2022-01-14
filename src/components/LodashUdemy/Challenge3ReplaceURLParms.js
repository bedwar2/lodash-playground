import React from "react";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";
import replaceUrl, { replaceUrlBetter } from "./ReplaceUrl";

const Challenge3ReplaceURLParams = () => {
  const initialUrl = "/posts/:postid/comments/:commentid";
  const newUrl = replaceUrlBetter(initialUrl, [
    { from: ":postid", to: 1 },
    { from: ":commentid", to: 3 },
  ]);

  const description = `Challenge 3 - Replace params in URL`;

  const codeBlock = `
    const replaceUrl = (initialUrl, replacements) => {
    forEach(replacements, (item) => {
        initialUrl = replace(initialUrl, item.from, item.to);
    });
        return initialUrl;
    };

    // This is better because there is no mutation of initial variable
    // and it uses an accumulator - changing on each iteration
    export const replaceUrlBetter = (initialUrl, replacements) => {
    return reduce(
        replacements,
        (acc, item) => {
            return replace(acc, item.from, item.to);
        },
        initialUrl
        );
    };
  
    const initialUrl = '/posts/:postid/comments/:commentid';
    const newUrl = replaceUrl(initialUrl, [{ postid: 1 }, { commentid: 3 }]);
  `;

  return (
    <div>
      <FunctionInfo heading="Challenge 3" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Challenge 3 Output</h3>
            <div>{newUrl}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Challenge3ReplaceURLParams;
