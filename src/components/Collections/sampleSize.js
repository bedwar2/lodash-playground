import React from 'react';
import { sampleSize } from 'lodash';
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
 
 let result = sampleSize(users, 2);
 
const description = `Gets n random elements at unique keys from collection up to the size of collection.`;

const html = <ul><li>{ JSON.stringify(result) }</li></ul>;



const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }
 ];
 
 let result = sampleSize(users, 2);

 JSON.stringify(result);
    `;

export const lo_sampleSize = <div>
<FunctionInfo heading="sampleSize" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;





