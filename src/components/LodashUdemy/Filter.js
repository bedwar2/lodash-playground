import React from "react";
import { filter, includes } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Filter = () => {
  const products = [
    { id: 1, name: "milk", price: "$1" },
    { id: 2, name: "bread", price: "$2" },
    { id: 1, name: "meat", price: "$3" },
  ];

  const mProducts = filter(products, (item) => {
    return includes(item.name, "m");
  });

  const description = `Example using the Filter method`;

  const codeBlock = `
  const products = [
    {id: 1,
     name: 'milk',
     price: '$1'
   },
   {id: 2,
       name: 'bread',
       price: '$2'
     },
     {id: 1,
       name: 'meat',
       price: '$3'
     }
];

 const mProducts = filter(products, (item) => {
     return item.name.startsWith('m');
 });
  `;

  return (
    <div>
      <FunctionInfo heading="Filter" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={JSON.stringify(mProducts)}
      ></ExecutionOutput>
    </div>
  );
};

export default Filter;
