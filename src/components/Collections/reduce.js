import React from 'react';
import { reduce } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';


const headers = [
  {
    name: "Regular @ 50%",
    code: "R_FMAP",
    value: null,
    formula: null,
    type: "customize-fmap-rate",
  },
  {
    name: "Indian Health @ 100%",
    code: "IH",
    value: null,
    formula: null,
    type: null,
  },
  {
    name: "Family Planning  @ 90%",
    code: "FP",
    value: null,
    formula: null,
    type: null,
  },
  {
    name: "Breast & Cervical  @ 69.34%",
    code: "BC",
    value: null,
    formula: null,
    type: "customize-fmap-rate",
  },
  {
    name: "VIII Group Newly @ 90%",
    code: "EG",
    value: null,
    formula: null,
    type: "customize-fmap-rate",
  },
  {
    name: "VIII Group Not Newly Exp @ 90%",
    code: "ER",
    value: null,
    formula: null,
    type: "customize-fmap-rate",
  },
  {
    name: "Parent / Caretaker Relatives @ 50%",
    code: "PCR",
    value: null,
    formula: null,
    type: "customize-fmap-rate",
  },
];

const accordionIds = reduce(headers, (acc, eachHeader) => ({
    ...acc,
    [eachHeader.code]: false
}), {});

const description = "Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).";

const html = <ul>{ <li>{  JSON.stringify(accordionIds) } </li>}</ul>;

const codeBlock = `
const headers = [
    {
      name: "Regular @ 50%",
      code: "R_FMAP",
      value: null,
      formula: null,
      type: "customize-fmap-rate",
    },
    {
      name: "Indian Health @ 100%",
      code: "IH",
      value: null,
      formula: null,
      type: null,
    },
    {
      name: "Family Planning  @ 90%",
      code: "FP",
      value: null,
      formula: null,
      type: null,
    },
    {
      name: "Breast & Cervical  @ 69.34%",
      code: "BC",
      value: null,
      formula: null,
      type: "customize-fmap-rate",
    },
    {
      name: "VIII Group Newly @ 90%",
      code: "EG",
      value: null,
      formula: null,
      type: "customize-fmap-rate",
    },
    {
      name: "VIII Group Not Newly Exp @ 90%",
      code: "ER",
      value: null,
      formula: null,
      type: "customize-fmap-rate",
    },
    {
      name: "Parent / Caretaker Relatives @ 50%",
      code: "PCR",
      value: null,
      formula: null,
      type: "customize-fmap-rate",
    },
  ];
  
  const accordionIds = reduce(headers, (acc, eachHeader) => ({
      ...acc,
      [eachHeader.code]: false
  }), {});
  

JSON.stringify(accordionIds);
 `;

export const lo_reduce = <div>
<FunctionInfo heading="reduce" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;



