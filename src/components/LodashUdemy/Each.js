import React from "react";
import { each } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Each = () => {
  let items = ["Milk", "Bread"];
  let listItems = [];

  each(items, (item, index) => {
    listItems.push(<li key={index}>{`${index + 1}. ${item}`}</li>);
  });

  const getOutput = () => {
    return (
      <ul>
        {each(listItems, (item, index) => {
          return item;
        })}
      </ul>
    );
  };

  let items2 = { 1: { name: "Milk" }, 2: { name: "Bread" } };
  let listItems2 = [];
  each(items2, (item2, index) => {
    listItems2.push(<li key={index}>{item2.name}</li>);
  });

  console.log(listItems);
  console.log(listItems2);
  const getOutput2 = () => {
    return (
      <ul>
        {each(listItems2, (item, index) => {
          return item;
        })}
      </ul>
    );
  };

  const description = `Examples using the each method`;

  const html = getOutput();
  const html2 = getOutput2();

  const codeBlock = `
    let items = ["Milk", "Bread"];
    
    const output = () => {
    return (<ul>
    { each(items, (item, index) => {
        <li>{index}.  {item}</li>
      })}
    </ul>)};
        `;

  const codeBlock2 = `
    let items2 = { 1: {name: "Milk"}, 2: { name: "Bread"}};
    const output2  = () => {
        return (<ul>
            { each(items2, (item, index) => {
                <li>{index}.  {JSON.stringify(item)}</li>
              })}
            </ul>)
    };    
    `;
  return (
    <div>
      <FunctionInfo heading="Each" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput componentHtml={html}></ExecutionOutput>

      <SampleCode code={codeBlock2}></SampleCode>
      <ExecutionOutput componentHtml={html2}></ExecutionOutput>
    </div>
  );
};

export default Each;
