import React from "react";
import {Table, Column} from "react-tisch";


const dataManager = {
    getData: function (state, onLoad) {
        return {
            itemCount: 2,
            filterOptions: [[]],
            visibleRows: [{index: 0, data: {name: 'Joe'}}, {index: 1, data: {name: 'Mike'}}]
        };
    }
};

const Sample2 = () =>
    <Table dataManager={dataManager}>
        <Column value={row => row.name}>Name</Column>
    </Table>;

export default Sample2;
