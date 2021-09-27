import React from "react";
import { orderBy } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Sort = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
  ];

  const sortedLikesDesc = orderBy(users, ["likes", "name"], ["desc", "asc"]);

  const description = `Examples using the orderBy`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 90 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
  ];

  const sortedLikesDesc = orderBy(users, ["likes", "name"], ['desc', 'asc']);
        `;
  return (
    <div>
      <FunctionInfo heading="orderBy" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={<div>{JSON.stringify(sortedLikesDesc)}</div>}
      ></ExecutionOutput>
    </div>
  );
};

export default Sort;
