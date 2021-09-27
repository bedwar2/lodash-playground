import { chunk } from "lodash";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { FunctionInfo } from "../shared/FunctionInfo";
import { SampleCode } from "../shared/SampleCode";

const numbers = [1, 2, 3, 4];
const listOfNumbers = chunk(numbers, 2);

export const chunkHtml = listOfNumbers.map((x, idx) => {
  return (
    <ul key={idx}>
      <li>
        Chunk {idx + 1}
        <ul>
          {x.map((y) => {
            return <li key={y}>{y}</li>;
          })}
        </ul>
      </li>
    </ul>
  );
});

const codeBlock = `
const numbers = [1,2,3,4];
const listOfNumbers = chunk(numbers, 2);
listOfNumbers.map((x, idx) => {return (
    <ul key={idx}>
        <li>Chunk {idx+1}<ul>{ x.map(y => { return (<li key={y}>{y}</li>) }) }</ul></li>
    </ul>)} );
`;

export const lo_chunk = (
  <div>
    <FunctionInfo
      heading="Chunk"
      description={
        "Creates an array of elements split into groups the length of size.  If it can't be split evenly, the final chunk will be the remaining elements."
      }
    />

    <SampleCode code={codeBlock}></SampleCode>

    <ExecutionOutput componentHtml={chunkHtml}></ExecutionOutput>
  </div>
);
