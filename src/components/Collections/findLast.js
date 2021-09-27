import React from 'react';
import { findLast } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];
 
 let result = findLast(users, (user) => { return user.age > 50; });
 
 const description = "This method is like _.find except that it iterates over elements of collection from right to left.";

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];
 
 let result = findLast(users, (user) => { return user.age > 50; });
 `;

export const lo_findLast = <div>
<FunctionInfo heading="FindLast" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;



