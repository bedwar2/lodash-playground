import { difference } from 'lodash';
import { ExecutionOutput } from '../shared/ExecutionOutput'
import { FunctionInfo } from '../shared/FunctionInfo';
import { SampleCode } from '../shared/SampleCode';


let numbers = [1, 2, 3, 4];
let listOfNumbers = difference(numbers, [2, 3]);

const html = <ul>{ listOfNumbers.map((x, idx) => {return (
            <li key={idx}>{ x }</li>)} ) }</ul>;
    
    const codeBlock = `
let numbers = [1, 2, 3, 4];
let listOfNumbers = difference(numbers, [2, 3]);
            `;

    export const lo_difference = <div>
        <FunctionInfo heading="Difference" 
                      description={"Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array."} />


        <SampleCode code={codeBlock}></SampleCode>


    <ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;