import React from "react";
import { groupBy } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const GroupBy = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const groupedUsers = groupBy(users, "isActive");

  const groupedUsersUsingFunction = groupBy(users, (user) => {
    return user.isActive && user.likes > 110;
  });

  const description = `Examples using the groupBy to group data`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const groupedUsers = groupBy(users, "isActive");

  const groupedUsersUsingFunction = groupBy(users, (user) => {
      return user.isActive && user.likes > 110;
  })
        `;
  return (
    <div>
      <FunctionInfo heading="groupBy" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <div>
              <strong>Is Active Grouping:</strong>{" "}
              {JSON.stringify(groupedUsers)}
            </div>
            <br />
            <div>
              <strong>Active with Likes {">"} 100 Grouping: </strong>
              {JSON.stringify(groupedUsersUsingFunction)}
            </div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default GroupBy;
