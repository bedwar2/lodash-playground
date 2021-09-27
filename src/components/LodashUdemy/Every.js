import React from "react";
import { every, some } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Reject = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: true, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 101 },
    { id: 4, name: "Fran", isActive: false, likes: 120 },
  ];

  const allUsersActive = every(users, (user) => {
    return user.isActive;
  });

  const allLikesGt100 = every(users, (user) => {
    return user.likes > 100;
  });

  const someLikesGt100 = some(users, (user) => {
    return user.likes > 100;
  });

  const someInactiveUsers = some(users, { isActive: false });

  const description = `Examples using the Every & Some methods`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: true, likes: 150 },
    { id: 3, name: "Bob", isActive: true, likes: 101 },
    { id: 4, name: "Fran", isActive: false, likes: 120 },
  ];

  const allUsersActive = every(users, (user) => {
    return user.isActive;
  });

  const allLikesGt100 = every(users, (user) => {
    return user.likes > 100;
  });

  const someLikesGt100 = some(users, (user) => {
    return user.likes > 100;
  });

  const someInactiveUsers = some(users, { isActive: false});
        `;
  return (
    <div>
      <FunctionInfo heading="Every & Some" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <div>All Active: {allUsersActive.toString()}</div>
            <div>
              All Likes {">"} 100: {allLikesGt100.toString()}
            </div>
            <div>
              Some Likes {">"} 100: {someLikesGt100.toString()}
            </div>
            <div>Some users Inactive: {someInactiveUsers.toString()}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Reject;
