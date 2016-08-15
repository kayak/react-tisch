import {Glyphicon} from "react-bootstrap";
import React from "react";

const sortGlyphs = {
    0: 'sort',
    1: 'sort-by-attributes',
    '-1': 'sort-by-attributes-alt'
};

export default ({children, onToggleSort, sortOrder}) =>
    <th className="text-center" onClick={onToggleSort}>
        {children}{' '}
        <Glyphicon glyph={sortGlyphs[sortOrder]}/>
    </th>;
