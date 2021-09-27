import { concat } from 'lodash';
import { ExecutionOutput } from '../shared/ExecutionOutput'
import { FunctionInfo } from '../shared/FunctionInfo';
import { SampleCode } from '../shared/SampleCode';


let numbers = [1, 2, 3, 4];
let listOfNumbers = concat(numbers, 5, 6, [7, 8]);

const html = <ul>{ listOfNumbers.map((x, idx) => {return (
            <li key={idx}>{ x }</li>)} ) }</ul>;
    
    const codeBlock = `
let numbers = [1, 2, 3, 4];
let listOfNumbers = concat(numbers, 5, 6, [7, 8]);
        `;

    export const lo_concat = <div>
        <FunctionInfo heading="Concat" 
                      description={"Creates a new array concatenating array with any additional arrays and/or values."} />


        <SampleCode code={codeBlock}></SampleCode>


    <ExecutionOutput componentHtml={html}></ExecutionOutput>
</div>;