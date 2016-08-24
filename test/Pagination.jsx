import {Table, Column} from "../src";
import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";

import {getColumnValues} from "./test_utils";


describe("Multi page <Table/>", () => {
    function range(start, end) {
        // Utility to create an array with integers from start (included) to end (excluded)
        for (var i = start, foo = []; i < end; i++) {
            foo.push(i);
        }
        return foo;
    }

    const longSampleData = range(0, 300);

    const testTable =
        <Table data={longSampleData}>
            <Column value={row => row}>Id</Column>
            <Column value={row => row}>Id</Column>
        </Table>;

    it("default pagination", function () {
        const wrapper = mount(testTable);
        const pageButtons = wrapper.find('PaginationButton').map(el => el.key());
        expect(pageButtons).to.eql([null, '1', '2', '3', '4', '5', 'ellipsis', '12', null]);
    });

    it("first page", function () {
        const wrapper = mount(testTable);
        const firstColumn = getColumnValues(wrapper, 0).map(x => parseInt(x));
        expect(firstColumn).to.eql(range(0, 25));
    });

    it("second page", function () {
        const wrapper = mount(testTable);
        wrapper.find('PaginationButton').at(2).find('a').simulate('click');
        const firstColumn = getColumnValues(wrapper, 0).map(x => parseInt(x));
        expect(firstColumn).to.eql(range(25, 50));
    });

});
