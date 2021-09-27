import React from 'react';
import { find } from 'lodash';
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
 
 let result = find(users, (user) => { return user.age > 55; });
 
 const description = "Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).";

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];
 
 let result = find(users, (user) => { return user.age > 55; });
 `;

export const lo_find = <div>
<FunctionInfo heading="Find" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;



