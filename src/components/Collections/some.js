import React from 'react';
import { some} from 'lodash';
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
 
 let result = some(users, (user) => { return user.active === true && user.user === 'Brian'});

 let result2 = some(users, {active: false});
 
const description = `Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).`;

const html = <ul><li>{ JSON.stringify(result) }</li></ul>;
const html2 = <ul><li>{ JSON.stringify(result2) }</li></ul>;


const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false },
    { user: 'Brian', active: true },
    { user: 'Ray', active: true }
 ];
 
 let result = some(users, (user) => { return user.active === true && user.user === 'Brian'});
 //Note this syntax also works: some(users, { user: 'Brian', active: true })

 let result2 = some(users, {active: false});

 JSON.stringify(result);
 JSON.stringify(result2);
    `;

export const lo_some = <div>
<FunctionInfo heading="some" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html} additionalOutput="result"></ExecutionOutput>
<ExecutionOutput componentHtml={html2} additionalOutput="result2"></ExecutionOutput>
</div>;



