import React from 'react';
import { intersectionWith } from 'lodash';
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
 
 let result = intersectionWith(users, [{ user: 'Sam' }, {user: 'Ray'}], (user, compare) => { return user.user === compare.user; });
 
const description = `This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).`;

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
 
 let result = intersectionWith(users, [{ user: 'Sam' }, {user: 'Ray'}], (user, compare) => { return user.user === compare.user; });
    `;

export const lo_intersectWith = <div>
<FunctionInfo heading="intersectionWith" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;





