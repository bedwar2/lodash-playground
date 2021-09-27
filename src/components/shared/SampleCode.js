import React from 'react';


export const SampleCode = (props) => {

    return (
        <pre>{`
Sample Code`}{ props.additionalTitle ? props.additionalTitle : ''}
{`\n----------------------------------------------`}
{props.code}
        </pre>
    )

}