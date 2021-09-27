import React from 'react';
import { dropWhile } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
 ];
 
 let result = dropWhile(users, function(user) { return !user.active; });
 
 let result2 = dropWhile(users, ['active', false]);


const html = <ul>{ result.map((x, idx) => {return (
        <li key={idx}>&#x007B; user: { x.user }, active: { x.active.toString() } &#x007D;</li>)})}</ul>;


const html2 = <ul>{ result2.map((x, idx) => {return (
            <li key={idx}>&#x007B; user: { x.user }, active: { x.active.toString() } &#x007D;</li>)})}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
 ];
 
 let result = _.dropWhile(users, function(user) { return !user.active; });

 let result2 = dropWhile(users, ['active', false]);
    `;

export const lo_dropWhile = <div>
<FunctionInfo heading="DropWhile" 
              description={"Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array)."} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html} additionalOutput="result"></ExecutionOutput>
<ExecutionOutput componentHtml={html2} additionalOutput="result2"></ExecutionOutput>
</div>;
