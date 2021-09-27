import React from 'react';
import { orderBy } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
  // Sort by `user` in ascending order and by `age` in descending order.
const result =  orderBy(users, ['user', 'age'], ['asc', 'desc']);

const description = `This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.`;

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
const result =  orderBy(users, ['user', 'age'], ['asc', 'desc']);
  
JSON.stringify(result);
 `;

export const lo_orderBy = <div>
<FunctionInfo heading="orderBy" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;



