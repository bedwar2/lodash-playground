import React from "react";
import { chain, map, compact, join } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";
import ClassNames from "./ClassNames";

const Challenge2ClassNames = () => {
  const liClass = {
    item: true,
    active: false,
    "item-highlighted": true,
  };

  const getClassNames = (classObject) => {
    return chain(classObject)
      .map((val, key) => {
        return val === true && key;
      })
      .compact()
      .join(" ")
      .value();
  };

  const description = `Challenge 2 - Replicate Classnames`;

  const codeBlock = `
const liClass = {
    item: true,
    active: false,
    "item-highlighted": true,
  };


  const getClassNames = (classObject) => {
    return
      chain(classObject)
      .map((val, key) => {
        return val === true && key;
      })
      .compact()
      .join(" ")
      .value();
  }

  `;

  return (
    <div>
      <FunctionInfo heading="Challenge 2" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Challenge 2 Output</h3>
            <div>{JSON.stringify(getClassNames(liClass))}</div>

            <h3>Using ClassNames Function</h3>
            <div>{ClassNames(liClass)}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Challenge2ClassNames;
