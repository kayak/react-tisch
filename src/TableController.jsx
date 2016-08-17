import React from "react";
import ReactDOM from "react-dom";
import TablePresentation from "./TablePresentation";


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


class TableController extends React.Component {
    state = {
        valuesByColumn: [],
        valuesByRow: [],
        uniqueValues: [],
        selectedFilters: [],
        sortColumn: 0,
        sortOrder: 1,
        itemsPerPage: 25,
        activePage: 1,
        searchText: ''
    };

    static propTypes = {
        data: React.PropTypes.array,
        children: React.PropTypes.array
    };

    setData(data) {
        if (!data) {
            return;
        }

        // Precompute value representations that are convenient for sorting and filtering

        let columns = this.props.children,
            valuesByColumn = columns.map(column => []),
            uniqueValues = columns.map(column => Object()),
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

        this.setState({
            valuesByColumn: valuesByColumn,
            valuesByRow: valuesByRow,
            uniqueValues: uniqueValues
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setData(nextProps.data);
    }

    componentWillMount() {
        this.setData(this.props.data);
    }

    doesRowMatchSearch(rowIndex) {
        let {valuesByRow, searchText} = this.state,
            searchWords = searchText.toLowerCase().split(/\s+/g),
            rowWords = valuesByRow[rowIndex].join(" ").toLowerCase().split(/\s+/g);

        for (let j = 0; j < searchWords.length; j++) {
            let searchWord = searchWords[j],
                i;
            for (i = 0; i < rowWords.length; i++) {
                if (rowWords[i].indexOf(searchWord) >= 0) {
                    break
                }
            }
            if (i === rowWords.length) {
                return false;
            }
        }
        return true;
    }

    doesRowMatchFilters(rowIndex) {
        let {valuesByRow, selectedFilters} = this.state,
            textValues = valuesByRow[rowIndex];

        for (let i = 0; i < textValues.length; i++) {
            let filterValue = selectedFilters[i];
            if (filterValue !== '' && filterValue !== undefined && filterValue != textValues[i]) {
                return false;
            }
        }
        return true;
    }

    sortedRowIndexes() {
        let {valuesByColumn, sortColumn, sortOrder} = this.state,
            sortedValues = valuesByColumn[sortColumn] || [],
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

    computeSortedAndFilteredRows() {
        return this.sortedRowIndexes()
            .filter(rowIndex => this.doesRowMatchFilters(rowIndex))
            .filter(rowIndex => this.doesRowMatchSearch(rowIndex));
    }

    paginatedRows(sortedAndFilteredRowIndexes) {
        let {data} = this.props,
            {activePage, itemsPerPage} = this.state;

        return sortedAndFilteredRowIndexes
            .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
            .map(rowIndex => data[rowIndex]);
    }

    pageCount(itemCount) {
        let {itemsPerPage} = this.state;
        return Math.ceil(itemCount / itemsPerPage);
    }

    onSort(sortColumn, sortOrder) {
        this.setState({
            sortColumn: sortColumn,
            sortOrder: sortOrder
        });
    }

    onFilter(selectedFilters) {
        this.setState({
            selectedFilters: selectedFilters
        });
    }

    onPageSelect(activePage) {
        this.setState({activePage});
    }

    onSearch(value) {
        this.setState({searchText: value});
    }

    render() {
        let sortedAndFilteredRowIndexes = this.computeSortedAndFilteredRows();

        return (
            <TablePresentation
                filterOptions={this.state.uniqueValues}
                sortColumn={this.state.sortColumn}
                sortOrder={this.state.sortOrder}
                selectedFilters={this.state.selectedFilters}
                activePage={this.state.activePage}
                searchText={this.state.searchText}
                pageCount={this.pageCount(sortedAndFilteredRowIndexes.length)}

                onSearch={this.onSearch.bind(this)}
                onSort={this.onSort.bind(this)}
                onFilter={this.onFilter.bind(this)}
                onPageSelect={this.onPageSelect.bind(this)}

                visibleRows={this.paginatedRows(sortedAndFilteredRowIndexes)}
            >
                {this.props.children}
            </TablePresentation>
        );
    }
}

export default TableController;
