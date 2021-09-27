import React from "react";
import { each, filter, orderBy, map, chain } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";
import { act } from "react-dom/test-utils";
import Each from "./Each";

const ChainingInLodash = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const activeSortedList = chain(users)
    .filter("isActive")
    .orderBy(["likes", "name"], ["desc", "asc"])
    .map((user) => {
      return `${user.name} has ${user.likes}.`;
    })
    .value();
  const description = `Examples using Chaining`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const activeSortedList = chain(users)
    .filter("isActive")
    .orderBy(["likes", "name"], ["desc", "asc"])
    .map((user) => {
      return ${"`$"}{user.name} has {"$"}{user.likes}.${"`"};
    })
    .value();
        `;
  return (
    <div>
      <FunctionInfo heading="Chaining in Lodash" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <ul>
            <li>{JSON.stringify(activeSortedList)}</li>
            {map(activeSortedList, (user) => {
              return <li>{user}</li>;
            })}
          </ul>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default ChainingInLodash;
