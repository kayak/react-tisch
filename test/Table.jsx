import {Table, Column} from "../src";
import Body from "../src/Body";
import {Glyphicon, Label} from "react-bootstrap";
import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";

import {getColumnValues} from "./test_utils";

const sampleData = [
    {
        "name": "Ida Roach",
        "age": 31,
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
        "age": 33,
        "eyeColor": "green",
        "tags": [
            "aliqua",
            "velit",
            "quis",
            "proident"
        ]
    },
    {
        "name": "Bradshaw Mason",
        "age": 22,
        "eyeColor": "brown",
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


describe('Simple <Table/>', () => {

    const testTable =
        <Table data={sampleData}>
            <Column value={row => row.name}>Name</Column>
            <Column value={row => row.age}>Age</Column>
            <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
            <Column value={Tags}>Tags</Column>
        </Table>;

    it("can be empty", function() {
        const wrapper = mount(<Table><Column value={row => row.name}>Name</Column></Table>);
        expect(wrapper.find(Column)).to.have.length(1);
    });

    describe("custom data manager", () => {
        const dataManager = {
            getData: () => ({
                itemCount: 2,
                filterOptions: [[]],
                visibleRows: [{index: 0, data: {name: 'Joe'}}, {index: 1, data: {name: 'Mike'}}]
            })
        };
        let testTableWithCustomDataManager = (
            <Table dataManager={dataManager}>
                <Column value={row => row.name}>Name</Column>
            </Table>
        );

        it("has correct rows", function () {
            const wrapper = mount(testTableWithCustomDataManager);
            const firstColumn = getColumnValues(wrapper, 0);
            expect(firstColumn).to.eql(['Joe', 'Mike']);
        });
    });

    it("contains table element", function () {
        const wrapper = mount(testTable);
        expect(wrapper.find('table')).to.have.length(1);
    });

    it("has four columns", function () {
        const wrapper = mount(testTable);
        expect(wrapper.find(Column)).to.have.length(4);
    });

    it("has three rows", function () {
        const wrapper = mount(testTable);
        expect(wrapper.find(Body.Row)).to.have.length(3);
    });

    it("has twelve cells", function () {
        const wrapper = mount(testTable);
        expect(wrapper.find(Body.Cell)).to.have.length(12);
    });

    describe("default order", function () {
        const wrapper = mount(testTable);

        it("has 1st column sorted", function () {
            const firstColumn = getColumnValues(wrapper, 0);
            expect(firstColumn).to.eql(['Bradshaw Mason', 'Dillon Andrews', 'Ida Roach']);
        });

        it("has the 2nd column not sorted", function () {
            const secondColumn = getColumnValues(wrapper, 1);
            expect(secondColumn).to.eql(["22", "33", "31"]);
        });
    });

    describe("1st column reverse sort", function () {
        const wrapper = mount(testTable);
        wrapper.find(Column).at(0).simulate('click');

        it("has the 1st column reverse sorted", function () {
            const firstColumn = getColumnValues(wrapper, 0);
            expect(firstColumn).to.eql(['Ida Roach', 'Dillon Andrews', 'Bradshaw Mason']);
        });

        it("has the 2nd column not sorted", function () {
            const secondColumn = getColumnValues(wrapper, 1);
            expect(secondColumn).to.eql(["31", "33", "22"]);
        });
    });

    describe("2nd column sort", function () {
        const wrapper = mount(testTable);
        wrapper.find(Column).at(1).simulate('click');

        it("has the 1st column not sorted", function () {
            const firstColumn = getColumnValues(wrapper, 0);
            expect(firstColumn).to.eql(['Bradshaw Mason', 'Ida Roach', 'Dillon Andrews']);
        });

        it("has the 2nd column sorted", function () {
            const secondColumn = getColumnValues(wrapper, 1);
            expect(secondColumn).to.eql(["22", "31", "33"]);
        });
    });

});
