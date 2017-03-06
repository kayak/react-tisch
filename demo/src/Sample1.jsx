import React from "react";
import {Table, Column} from "react-tisch";
import {Grid, Glyphicon, Label} from "react-bootstrap";
import sampleData from "../../assets/sample_data";


const EyeColor = function ({eyeColor}) {
    return <Glyphicon glyph="eye-open" style={{color: eyeColor}}/>;
};


const Tags = function ({tags}) {
    return <div>{tags.map((tag, i) =>
        <Label bsStyle="default" key={i}>{tag}</Label>)}</div>;
};


const Sample1 = () =>
    <Grid>
        <Table data={sampleData}>
            <Column value={row => row.name}>Name</Column>
            <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
            <Column value={Tags}>Tags</Column>
        </Table>
    </Grid>;

export default Sample1;
