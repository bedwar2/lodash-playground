import React from 'react';
import { partition, map } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';


const description  = `Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).`;

const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];

let result = [];
result.push(JSON.stringify(partition(users, function(o) { return o.active; })));
result.push(JSON.stringify(partition(users, { 'age': 1, 'active': false })));
result.push(JSON.stringify(partition(users, ['active', false]))); 
result.push(JSON.stringify(partition(users, 'active')));

const html = <ul>{ map(result, (resStr) => { return <li>{resStr}</li> }) }</ul>;

const codeBlock = `
const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];

  let result = [];
  result.push(JSON.stringify(partition(users, function(o) { return o.active; })));
  result.push(JSON.stringify(partition(users, { 'age': 1, 'active': false })));
  result.push(JSON.stringify(partition(users, ['active', false]))); 
  result.push(JSON.stringify(partition(users, 'active')));

`;

export const lo_partition = <div>
<FunctionInfo heading="partition" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;
