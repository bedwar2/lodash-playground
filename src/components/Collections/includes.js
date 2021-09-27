import React from 'react';
import { includes } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
 ];

 let userRay  = { user: 'Ray', age: 50 };
 users.push(userRay);
 
const result = includes(users, userRay);
 
const description = "Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.  Note that this check is by reference!!!";

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
 ];

 let userRay  = { user: 'Ray', age: 50 };
 users.push(userRay);
 
const result = includes(users, userRay);
JSON.stringify(result);
 `;

export const lo_includes = <div>
<FunctionInfo heading="includes" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;

