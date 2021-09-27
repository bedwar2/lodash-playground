import { compact } from 'lodash';
import { ExecutionOutput } from '../shared/ExecutionOutput'
import { FunctionInfo } from '../shared/FunctionInfo';
import { SampleCode } from '../shared/SampleCode';


let numbers = [1, false, 3, 0];
let listOfNumbers = compact(numbers);

const compactHtml = <ul>{ listOfNumbers.map((x, idx) => {return (
            <li key={idx}>{ x }</li>)} ) }</ul>;
    
    const codeBlock = `
let numbers = [1, false, 3, 0];
let listOfNumbers = compact(numbers);
    `;

    export const lo_compact = <div>
        <FunctionInfo heading="Compact" 
                      description={"Creates an array with all falsey values removed. The values false, null, 0, \"\", undefined, and NaN are falsy."} />


        <SampleCode code={codeBlock}></SampleCode>


    <ExecutionOutput componentHtml={compactHtml}></ExecutionOutput>
</div>;