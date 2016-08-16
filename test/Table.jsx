import {Table, Column} from "../src";
import Body from "../src/Body";
import {Glyphicon, Label} from "react-bootstrap";
import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";

const sampleData = [
    {
        "name": "Ida Roach",
        "eyeColor": "blue",
        "tags": [
            "magna",
            "in",
            "labore",
            "aliqua",
            "veniam"
        ]
    },
    {
        "name": "Dillon Andrews",
        "eyeColor": "brown",
        "tags": [
            "aliqua",
            "velit",
            "quis",
            "proident"
        ]
    },
    {
        "name": "Bradshaw Mason",
        "eyeColor": "green",
        "tags": [
            "reprehenderit",
            "et"
        ]
    },
];


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

    it("has three columns", function() {
        const wrapper = mount(testTable);
        expect(wrapper.find(Column)).to.have.length(3);
    });

    it("has three rows", function() {
        const wrapper = mount(testTable);
        expect(wrapper.find(Body.Row)).to.have.length(3);
    });

    it("has nine cells", function() {
        const wrapper = mount(testTable);
        expect(wrapper.find(Body.Cell)).to.have.length(9);
    });

});
