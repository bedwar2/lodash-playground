import React from 'react';
import { map } from 'lodash';
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
const result = map(users, (user) => { return user.user + ' has ' + (66 - user.age) + ' years until retirement.' });
 
const description = "Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).";

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
const result = map(users, (user) => { return user.user + ' has ' + (66 - user.age) + ' years until retirement.' });

JSON.stringify(result);
 `;

export const lo_map = <div>
<FunctionInfo heading="map" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>

</div>;




