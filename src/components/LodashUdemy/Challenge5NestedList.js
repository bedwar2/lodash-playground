import React from "react";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";
import { filter, map, chain } from "lodash";

const Challenge5NestedList = (props) => {
  const flatList = [
    {
      id: 1,
      name: "Id 1, level 1",
      parentId: null,
    },
    {
      id: 2,
      name: "Id 2, level 1",
      parentId: null,
    },
    {
      id: 3,
      name: "Id 3, level 2",
      parentId: 1,
    },
    {
      id: 4,
      name: "Id 4, level 3",
      parentId: 3,
    },
    {
      id: 5,
      name: "Id 5, level 2",
      parentId: 2,
    },
  ];

  const getChildren = (id, flatList) => {
    let children = filter(flatList, (item) => {
      return item.parentId === id;
    });
    return map(children, (childItem) => {
      let newChildItem = { id: childItem.id, name: childItem.name };
      newChildItem["children"] = getChildren(childItem.id, flatList);
      return newChildItem;
    });
  };

  const getNestedList = (flatList) => {
    return chain(flatList)
      .filter((val) => {
        return val.parentId === null;
      })
      .map((val, key) => {
        let newVal = { id: val.id, name: val.name };
        newVal["children"] = getChildren(val.id, flatList);
        return newVal;
      })
      .value();
  };

  const description = "Take flat list and convert to nested list";
  const codeBlock = `code`;
  const output = getNestedList(flatList);

  return (
    <div>
      <FunctionInfo heading="Challenge 5" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Challenge 5 Output</h3>
            <div>{JSON.stringify(output)}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Challenge5NestedList;
