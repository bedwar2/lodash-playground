import React from 'react';
import { keyBy } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];

 //Sort users to make output nicer
users.sort((user1, user2) => { 
            if (user1.user > user2.user) 
            { 
                return 1; 
            }  
            else { 
                    return user1.user < user2.user ? -1 : 0 
            }});
const result = keyBy(users, (user) => { return user.user + user.age });
 
const description = "Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).";

const html = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
let users = [
    { user: 'Sam', age: 55 },
    { user: 'Ted', age: 56 },
    { user: 'Julie', age: 61 },
    { user: 'Brian', age: 51 },
    { user: 'Ray', age: 50 }
 ];

 //Sort users to make output nicer
users.sort((user1, user2) => { 
            if (user1.user > user2.user) 
            { 
                return 1; 
            }  
            else { 
                    return user1.user < user2.user ? -1 : 0 
            }});
            
const result = keyBy(users, (user) => { return user.user + user.age });

JSON.stringify(result);
 `;

export const lo_keyBy = <div>
<FunctionInfo heading="keyBy" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;




