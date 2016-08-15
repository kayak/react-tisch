import React from "react";

const Filter = ({filter, filterOptions, onChange}) => (
    filter ?
        <th className="text-center">
            <select name="" id="" onChange={onChange} style={{width: '100%'}}>
                <option value=""/>
                {filterOptions.map(value =>
                    <option key={value} value={value}>{value}</option>)}
            </select>
        </th> :
        <th/>
);

export default Filter;
