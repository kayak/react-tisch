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

    function clickPaginationButton(table, buttonText) {
        return table.find('PaginationButton').findWhere(el => el.text() === buttonText).find('a').simulate('click');
    }

    const longSampleData = range(0, 300);

    const testTable =
        <Table data={longSampleData}>
            <Column value={row => row}>Id</Column>
        </Table>;

    it("has correct pagination buttons", function () {
        const wrapper = mount(testTable);
        const pageButtons = wrapper.find('PaginationButton').map(el => el.text());
        expect(pageButtons).to.eql(['‹', '1', '2', '3', '4', '5', '…', '12', '›']);
    });

    it("has correct rows on first page", function () {
        const wrapper = mount(testTable);
        const firstColumn = getColumnValues(wrapper, 0).map(x => parseInt(x));
        expect(firstColumn).to.eql(range(0, 25));
    });

    it("has correct rows on second page", function () {
        const wrapper = mount(testTable);
        clickPaginationButton(wrapper, '2');
        const firstColumn = getColumnValues(wrapper, 0).map(x => parseInt(x));
        expect(firstColumn).to.eql(range(25, 50));
    });

    it("shows correct entry count on 1st page", function () {
        const wrapper = mount(testTable);
        const text = wrapper.find('.shown-entries').text();
        expect(text).to.equal("Showing 1 to 25 of 300 entries");
    });

    it("shows correct entry count on 2nd page", function () {
        const wrapper = mount(testTable);
        clickPaginationButton(wrapper, '2');
        const text = wrapper.find('.shown-entries').text();
        expect(text).to.equal("Showing 26 to 50 of 300 entries");
    });

});
