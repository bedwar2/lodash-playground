import React from "react";
import { map } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Map = () => {
  let items = [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
  ];
  const outputHtml = map(items, (item, index) => {
    return (
      <li>
        {item.name} - id: {item.id}
      </li>
    );
  });

  var exerciseData = [
    { id: 1, first_name: "John", status: "active" },
    { id: 2, first_name: "Mike", status: "inactive" },
  ];

  const mappedUsers = map(exerciseData, (user) => {
    return {
      id: user.id,
      firstName: user.first_name,
      isActive: user.status === "active",
    };
  });

  const description = `Example using the Map method`;

  const codeBlock = `
    let items = [
        { id: 1, name: "John" },
        { id: 2, name: "Jack" },
    ];
    const outputHtml = map(items, (item, index) => {
        return (
          <li>
            {item.name} - id: {item.id}
          </li>
        );
      });
  `;

  const codeBlock2 = `
  var exerciseData = [
    {id: 1, first_name: 'John', status: 'active'},
    {id: 2, first_name: 'Mike', status: 'inactive'}
];

map(exerciseData, (user) => {
    return {
        id: user.id,
        firstName: user.first_name,
        isActive: user.status === 'active'
    }
} );
  `;

  return (
    <div>
      <FunctionInfo heading="Map" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput componentHtml={<ul>{outputHtml}</ul>}></ExecutionOutput>

      <SampleCode code={codeBlock2}></SampleCode>
      <ExecutionOutput
        componentHtml={<div>{JSON.stringify(mappedUsers)}</div>}
      ></ExecutionOutput>
    </div>
  );
};

export default Map;
