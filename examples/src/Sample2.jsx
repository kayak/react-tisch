import React from "react";
import {
    Table,
    Column
} from "react-tisch";


class DataManager {
    /*
     * Very basic example for implementing your own data manager
     */

    constructor() {
        this.data = [{index: 0, data: {name: 'Joe'}}, {index: 1, data: {name: 'Mike'}}];
    }

    getData(state, onLoad) {
        /*
         * Refer to the documentation for full details on what the state object contains, or inspect the variable
         * passed here.
         */
        return {
            itemCount: this.data.length,
            filterOptions: [[]],
            visibleRows: this.data
        };
    }
}

const dataManager = new DataManager();

const Sample2 = () =>
    <Table getData={dataManager.getData.bind(dataManager)}>
        <Column value={row => row.name}>Name</Column>
    </Table>;

export default Sample2;
