import React from 'react';
import { reject } from 'lodash';
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
 
 let result = reject(users, (user) => { return !user.active; });
 
const description = `The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.`;

const html = <ul>{ result.map((x, idx) => {return (
        <li key={idx}>{ JSON.stringify(x) }</li>)})}</ul>;



const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }
 ];
 
 let result = reject(users, (user) => { return !user.active; });
    `;

export const lo_reject = <div>
<FunctionInfo heading="reject" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;





