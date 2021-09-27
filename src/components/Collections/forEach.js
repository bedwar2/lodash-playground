import React from 'react';
import { forEach } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let userNames = [];
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];
 
 forEach(users, (user, key) => { userNames.push(user.user); });
 
 const description = "Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.";

const html = <ul>{ <li>{  JSON.stringify(userNames) } </li>}</ul>;

const codeBlock = `
let userNames = [];
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];
 
 forEach(users, (user, key) => { userNames.push(user.user); });

 JSON.stringify(userNames);
 `;

export const lo_forEach = <div>
<FunctionInfo heading="forEach" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;

