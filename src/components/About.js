import React from 'react';
import { map } from 'lodash';
import { SampleCode } from './shared/SampleCode';

export default function About() {


    const aboutText = `This application is an example of using lodash with React components.
    This set of examples is to help developers find the tool they need to work with their React Application.`.split('\n').map(str => <>{str}<br /></>);

    let numbers = [1,2,3,4];
    const numArray = map(numbers, (x, idx) => { return  (<li key={idx.toString()}>val: {x}, index: {idx}</li>) } ) ;

    const code = `
let numbers = [1,2,3,4];
const numArray = map(numbers, (x, idx) => { return  (<li key={idx.toString()}>{x} - {idx}</li>) } ) ;    
`;

    return (
        <div className="container"><h1>About</h1>
                 {aboutText}
                <hr />
                <div className="mt-2">
                Mapping Example from Lodash:
                <SampleCode code={code}></SampleCode>
                    <ul>
                        { numArray }
                    </ul>
                </div>
        </div>
    );

}