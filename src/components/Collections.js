import React from 'react';
import { Lo_countBy } from './Collections/CountBy';
import { LOEvery } from './Collections/Every';
import { LoFilter } from './Collections/Filter';
import { lo_find } from './Collections/find';
import { lo_findLast } from './Collections/findLast';
import { lo_flatMap } from './Collections/flatMap';
import { lo_forEach } from './Collections/forEach';
import { lo_groupBy } from './Collections/groupBy';
import { lo_includes } from './Collections/includes';
import { lo_keyBy } from './Collections/keyBy';
import { lo_map } from './Collections/map';
import { lo_orderBy } from './Collections/orderBy';
import { lo_partition } from './Collections/partition';
import { lo_reduce } from './Collections/reduce';
import { lo_reject } from './Collections/reject';
import { lo_sampleSize } from './Collections/sampleSize';
import { lo_some } from './Collections/some';



export const Collections = () => {
    
    return  (
        <div className="container mb-4">
            <div><Lo_countBy></Lo_countBy></div>
            <div><LoFilter></LoFilter></div>
            <div><LOEvery></LOEvery></div>
            <div>{lo_find}</div>
            <div>{lo_findLast}</div>
            <div>{lo_flatMap}</div>
            <div>{lo_forEach}</div>
            <div>{lo_groupBy}</div>
            <div>{lo_includes}</div>
            <div>{lo_keyBy}</div>
            <div>{lo_map}</div>
            <div>{lo_orderBy}</div>
            <div>{lo_partition}</div>
            <div>{lo_reduce}</div>
            <div>{lo_reject}</div>
            <div>{lo_sampleSize}</div>
            <div>{lo_some}</div>
        </div>
    );
}
