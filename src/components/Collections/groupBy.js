import React from 'react';
import { groupBy } from 'lodash';
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
 
let result = groupBy(users, (user) => { return user.active });
 
const description = "Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).";

const html = <ul><li>false: {  JSON.stringify(result.false) } </li><li>true: { JSON.stringify(result.true) }</li></ul>;

const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }
 ];
 
let result = groupBy(users, (user) => { return user.active });

JSON.stringify(result.false);
JSON.stringify(result.true);
 `;

export const lo_groupBy = <div>
<FunctionInfo heading="groupBy" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;

