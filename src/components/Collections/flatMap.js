import { map, flatMap } from 'lodash';
import { FunctionInfo } from '../shared/FunctionInfo';
import { ExecutionOutput } from '../shared/ExecutionOutput';
import { SampleCode } from '../shared/SampleCode';

const fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
}
const mapResult = map([0, 255], fromRed);
const result = flatMap([0, 255], fromRed);

 
const description = "Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).";

const html = <ul>{ <li>{  JSON.stringify(mapResult) } </li>}</ul>;
const html2 = <ul>{ <li>{  JSON.stringify(result) } </li>}</ul>;

const codeBlock = `
const fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
}

const mapResult = map([0, 255], fromRed);
const result = flatMap([0, 255], fromRed);

 `;

export const lo_flatMap = <div>
<FunctionInfo heading="FlatMap" 
              description={description} />


<SampleCode code={codeBlock}></SampleCode>


<ExecutionOutput componentHtml={html} additionalOutput="from map"></ExecutionOutput>
<ExecutionOutput componentHtml={html2} additionalOutput="from flatMap"></ExecutionOutput>
</div>;



