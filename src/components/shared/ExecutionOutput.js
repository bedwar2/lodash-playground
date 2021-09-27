import React from 'react';


export const ExecutionOutput = (props) => {
    
    return (
    <div>
        Output { props.additionalOutput ? '(' + props.additionalOutput + ')' : '' }
        <table>
            <tbody>
                <tr>
                    <td style={{ borderWidth: '1px', borderStyle: 'solid', width: '850px' }}>
                        {props.componentHtml}              
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}