import sampleData from "../assets/sample_data";
import {Table, Column} from "../src";
import {Glyphicon, Label} from "react-bootstrap";
import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";


const EyeColor = function ({eyeColor}) {
    return <Glyphicon glyph="eye-open" style={{color: eyeColor}}/>;
};

const Tags = function ({tags}) {
    return <div>{tags.map((tag, i) =>
        <Label bsStyle="default" key={i}>{tag}</Label>)}</div>;
};

const testTable =
    <Table data={sampleData}>
        <Column value={row => row.name}>Name</Column>
        <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
        <Column value={Tags}>Tags</Column>
    </Table>;


describe('<Table/>', () => {

    it("contains table element", function () {
        const wrapper = mount(testTable);
        expect(wrapper.find('table')).to.have.length(1);
    });

});
