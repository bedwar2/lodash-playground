import React from 'react';
import { filter } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }
 ];
 
 let result = filter(users, (user) => { return user.active; });
 
const description = `Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).`;

const html = <ul>{ result.map((x, idx) => {return (
        <li key={idx}>&#x007B; user: { x.user }, active: { x.active.toString() } &#x007D;</li>)})}</ul>;



const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }

 ];
 
 let result = filter(users, (user) => { return user.active; });
    `;

export const LoFilter = () => {
return (
<div>
<FunctionInfo heading="Filter" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>);};





