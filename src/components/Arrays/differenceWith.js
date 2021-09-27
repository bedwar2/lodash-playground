import React from 'react';
import { isEqual, differenceWith } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

let objects = [{ 'x': 4, 'y' : 2 }, { 'x': 1 }];
let result = differenceWith(objects, [{ 'y': 2, 'x': 4 }], isEqual);

const html = <ul>{ result.map((x, idx) => {return (
        <li key={idx}>&#x007B; x: { x.x } &#x007D;</li>)})}</ul>;

const codeBlock = `
let objects = [{ 'x': 4, 'y' : 2 }, { 'x': 1 }];
let result = differenceWith(objects, [{ 'y': 2, 'x': 4 }], isEqual);
    `;

export const lo_differenceWith = <div>
<FunctionInfo heading="DifferenceWith" 
              description={"This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal)."} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;