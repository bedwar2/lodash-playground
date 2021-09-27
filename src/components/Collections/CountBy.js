import React from 'react';
import { countBy } from 'lodash';
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
 
 let result = countBy(users, (user) => { return user.active; });
 
const description = `Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).`;

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }

 ];
 
 let result = countBy(users, (user) => { return user.active; });
    `;

export const Lo_countBy = () => <div>
<FunctionInfo heading="CountBy" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;





