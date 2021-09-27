import React from "react";
import { reject } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Reject = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 90 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
  ];

  const popularUsers = reject(users, (user) => {
    return user.likes < 100 || !user.isActive;
  });

  const description = `Examples using the reject method.  Good choice as it does not mutate the original array.  User over remove.`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 90 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
  ];

  const popularUsers = reject(users, (user) => {
      return user.likes < 100 || !user.isActive
  });

        `;
  return (
    <div>
      <FunctionInfo heading="Reject" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={<div>{JSON.stringify(popularUsers)}</div>}
      ></ExecutionOutput>
    </div>
  );
};

export default Reject;
