import React from 'react';
import { lo_chunk } from './Arrays/chunk'
import { lo_compact } from './Arrays/compact';
import { lo_concat } from './Arrays/concat';
import { lo_difference } from './Arrays/difference';
import { lo_differenceBy, lo_differenceBy2 } from './Arrays/differenceBy';
import { lo_differenceWith } from './Arrays/differenceWith';
import { lo_dropWhile } from './Arrays/dropWhile';
import { lo_intersectWith } from './Arrays/intersectWith';
import { lo_remove } from './Arrays/remove';


export const Arrays = () => {
    
    return  (
        <div className="container mb-4">
            <div>{lo_chunk}</div>
            <div>{lo_compact}</div>
            <div>{lo_concat}</div>
            <div>{lo_difference}</div>
            <div>{lo_differenceBy}</div>
            <div>{lo_differenceBy2}</div>
            <div>{lo_differenceWith}</div>
            <div>{lo_dropWhile}</div>
            <div>{lo_remove}</div>
            <div>{lo_intersectWith}</div>
        </div>
    );
}
