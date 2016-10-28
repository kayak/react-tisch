import React from "react";
import ReactDOM from "react-dom";


function componentToText(component) {
    if (!React.isValidElement(component)) {
        return component;
    }
    let div = document.createElement("DIV");
    ReactDOM.render(component, div);
    return div.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
}


function getRawCellValue(column, row) {
    if (column.props.rawValue) {
        return column.props.rawValue(row);
    } else if (column.props.value) {
        return componentToText(column.props.value(row));
    }
    return null;
}


class DataManager {
    constructor(data, columns) {
        // Pre-compute value representations that are convenient for sorting and filtering

        let valuesByColumn = columns.map(() => []),
            uniqueValues = columns.map(() => Object()),
            valuesByRow;

        valuesByRow = data.map(function (row, i) {
            return columns.map(function (column, j) {
                let value = getRawCellValue(column, row);
                valuesByColumn[j].push({
                    rowIndex: i,
                    value: value
                });
                uniqueValues[j][value] = 1;
                return value;
            });
        }.bind(this));

        valuesByColumn.forEach(values => values.sort(
            (a, b) => a.value < b.value ? -1 : (a.value > b.value ? 1 : 0))
        );

        uniqueValues = uniqueValues.map(values => Object.keys(values));

        this.data = data;
        this.itemCount = data.length;
        this.valuesByColumn = valuesByColumn;
        this.valuesByRow = valuesByRow;
        this.uniqueValues = uniqueValues;
    }

    doesRowMatchSearch(rowIndex, searchText) {
        let searchWords = searchText.toLowerCase().split(/\s+/g),
            rowWords = this.valuesByRow[rowIndex].join(" ").toLowerCase().split(/\s+/g);

        for (let j = 0; j < searchWords.length; j++) {
            let searchWord = searchWords[j],
                i;
            for (i = 0; i < rowWords.length; i++) {
                if (rowWords[i].indexOf(searchWord) >= 0) {
                    break;
                }
            }
            if (i === rowWords.length) {
                return false;
            }
        }
        return true;
    }

    doesRowMatchFilters(rowIndex, selectedFilters) {
        let textValues = this.valuesByRow[rowIndex];

        for (let i = 0; i < textValues.length; i++) {
            let filterValue = selectedFilters[i];
            if (filterValue !== '' && filterValue !== undefined && filterValue != textValues[i]) {
                return false;
            }
        }
        return true;
    }

    sortedRowIndexes(sortColumn, sortOrder) {
        let sortedValues = this.valuesByColumn[sortColumn] || [],
            sortedRowIndexes = [];
        if (sortOrder === 1) {
            for (let i = 0; i < sortedValues.length; i++) {
                sortedRowIndexes.push(sortedValues[i].rowIndex);
            }
        } else {
            for (let i = sortedValues.length - 1; i >= 0; i--) {
                sortedRowIndexes.push(sortedValues[i].rowIndex);
            }
        }
        return sortedRowIndexes;
    }

    paginatedRows(sortedAndFilteredRowIndexes, activePage, itemsPerPage) {
        let data = this.data;

        return sortedAndFilteredRowIndexes
            .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
            .map(rowIndex => ({
                index: rowIndex,
                data: data[rowIndex]
            }));
    }

    getVisibleRows({selectedFilters, sortColumn, sortOrder, itemsPerPage, activePage, searchText}) {
        let sortedAndFilteredRowIndexes = this.sortedRowIndexes(sortColumn, sortOrder)
                .filter(rowIndex => this.doesRowMatchFilters(rowIndex, selectedFilters))
                .filter(rowIndex => this.doesRowMatchSearch(rowIndex, searchText));

        return this.paginatedRows(sortedAndFilteredRowIndexes, activePage, itemsPerPage);
    }

    getData(state, onLoad) {
        /*
         * Only required public member of DataManager.
         * It doesn't have to return data: for an async data manager, it can call the onLoad callback provided in the
         * second argument when data is ready.
         */
        return {
            visibleRows: this.getVisibleRows(state),
            itemCount: this.itemCount,
            filterOptions: this.uniqueValues
        };
    }
}

export default DataManager;
