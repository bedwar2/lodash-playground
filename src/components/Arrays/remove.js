import React from 'react';
import { remove} from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
 ];
 
 //let result = remove(users, function(user) { return !user.active; });
// let result = remove(users, { active: false});
 let result = remove(users, (user) => { return !user.active; });
 


const html = <ul>{ result.map((x, idx) => {return (
        <li key={idx}>&#x007B; user: { x.user }, active: { x.active.toString() } &#x007D;</li>)})}</ul>;

const html2 = <ul>{ users.map((x, idx) => {return (
    <li key={idx}>&#x007B; user: { x.user }, active: { x.active.toString() } &#x007D;</li>)})}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
 ];
 
 //Commmented out lines are alternate ways to accomplish same action
 //let result = remove(users, function(user) { return !user.active; });
// let result = remove(users, { active: false});
 let result = remove(users, (user) => { return !user.active; });
    `;

export const lo_remove = <div>
<FunctionInfo heading="remove" 
              description={"Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array)."} />


<SampleCode code={codeBlock}></SampleCode>

Removed Elements
<hr />
<ExecutionOutput componentHtml={html} additionalOutput="From result variable"></ExecutionOutput>
<br />
<br />
Remaining Elements 
<hr />
<ExecutionOutput componentHtml={html2} additionalOutput="Changed users variable"></ExecutionOutput>



</div>;
