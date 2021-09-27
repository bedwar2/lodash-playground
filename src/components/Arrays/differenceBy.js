import { differenceBy } from 'lodash';
import { ExecutionOutput } from '../shared/ExecutionOutput'
import { FunctionInfo } from '../shared/FunctionInfo';
import { SampleCode } from '../shared/SampleCode';


let numbers = [1.7, 2.4, 3.6, 4.2];
let listOfNumbers = differenceBy(numbers, [1.3, 2.2], Math.floor);

let listOfNumbers2 = differenceBy([{ 'x': 4 }, { 'x': 1 }], [{ 'x': 4 }], 'x');

console.log(listOfNumbers2);

const html = <ul>{ listOfNumbers.map((x, idx) => {return (
            <li key={idx}>{ x }</li>)} ) }</ul>;

const html2 = <ul>{ listOfNumbers2.map((x, idx) => {return (
    <li key={idx}>&#x007B; x: { x.x } &#x007D;</li>)})}</ul>;

    const codeBlock = `
let numbers = [1.7, 2.4, 3.6, 4.2];
let listOfNumbers = differenceBy(numbers, [1.3, 2.2], Math.floor);
            `;

const codeBlock2 = `
let listOfNumbers2 = differenceBy([{ 'x': 4 }, { 'x': 1 }], [{ 'x': 4 }], 'x');`;


    export const lo_differenceBy = <div>
        <FunctionInfo heading="DifferenceBy" 
                      description={"This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value)."} />


        <SampleCode   code={codeBlock}></SampleCode>


    <ExecutionOutput  componentHtml={html}></ExecutionOutput>

</div>;


export const lo_differenceBy2 = <div>
        <SampleCode   code={codeBlock2} additionalTitle={" (with object)"}></SampleCode>
        <ExecutionOutput  componentHtml={html2}></ExecutionOutput>
</div>
