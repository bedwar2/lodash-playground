import React from "react";
import {
  each,
  filter,
  orderBy,
  map,
  chain,
  head,
  tail,
  last,
  initial,
} from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const PartsOfAnArray = () => {
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const activeSorted = chain(users)
    .filter("isActive")
    .orderBy(["likes", "name"], ["desc", "asc"])
    .map((user) => {
      return `${user.name} has ${user.likes}.`;
    })
    .value();
  const description = `Getting parts of an array examples`;

  const codeBlock = `
  const users = [
    { id: 1, name: "Brian", isActive: true, likes: 110 },
    { id: 2, name: "Fred", isActive: false, likes: 150 },
    { id: 3, name: "Bob", isActive: false, likes: 110 },
    { id: 4, name: "Fran", isActive: true, likes: 120 },
    { id: 5, name: "Joni", isActive: true, likes: 130 },
  ];

  const activeSorted = chain(users)
  .filter("isActive")
  .orderBy(["likes", "name"], ["desc", "asc"])
  .map((user) => {
    return ${"`$"}{user.name} has ${"$"}{user.likes}.${"`"};
  })
  .value();

  //First Element:
  head(activeSorted);

  //Tail:
  tail(activeSorted);

  //Last Element:
  last(activeSorted);

  //Initial (returns first through 2nd to last element)
  initial(activeSorted);
        `;
  return (
    <div>
      <FunctionInfo heading="Parts of an Array" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Head Example</h3>
            <ul>
              <li>
                First Element of Active Users Sorted By Likes Desc, Name Asc:{" "}
                {head(activeSorted)}
              </li>
            </ul>
            <h3>Tail Example</h3>
            <p>
              Elements after first element of Active Users Sorted By Likes Desc,
              Name Asc
            </p>
            <ul>
              {chain(activeSorted)
                .tail()
                .map((item) => {
                  return <li>{item}</li>;
                })
                .value()}
            </ul>
            <h3>Last Example</h3>
            <ul>
              <li>
                Last Element of Active Users Sorted By Likes Desc, Name Asc:{" "}
                {last(activeSorted)}
              </li>
            </ul>
            <h3>Initial Example</h3>
            <p>
              First element through 2nd to last element. Leaves off the last
              element.
            </p>
            <ul>
              {chain(activeSorted)
                .initial()
                .map((item) => {
                  return <li>{item}</li>;
                })
                .value()}
            </ul>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default PartsOfAnArray;
