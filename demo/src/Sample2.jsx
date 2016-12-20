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

    initialize(columns, onNewDataReceived) {
        /*
         * Called when the table is mounted
         */
    }

    getData(state) {
        /*
         * Called when the table state changes.
         * For async data fetching, return null and call onNewDataReceived
         * when the new data is ready
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
    <Table dataManager={dataManager}>
        <Column value={row => row.name}>Name</Column>
    </Table>;

export default Sample2;
