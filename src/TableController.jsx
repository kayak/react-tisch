import React from "react";
import TablePresentation from "./TablePresentation";
import DataManager from "./DataManager";


class TableController extends React.Component {
    state = {
        selectedFilters: [],
        sortColumn: 0,
        sortOrder: 1,
        itemsPerPage: 25,
        activePage: 1,
        searchText: '',
        selectedRows: {},
        canSelectRows: false
    };

    static propTypes = {
        data: React.PropTypes.array,
        children: React.PropTypes.node.isRequired
    };

    setData(data) {
        let columns = React.Children.toArray(this.props.children);

        this.setState({
            dataManager: new DataManager(data, columns)
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setData(nextProps.data);
    }

    componentWillMount() {
        this.setData(this.props.data);
    }

    onSort(sortColumn, sortOrder) {
        this.setState({sortColumn, sortOrder});
    }

    onFilter(selectedFilters) {
        this.setState({selectedFilters});
    }

    onPageSelect(activePage) {
        this.setState({activePage});
    }

    onSearch(searchText) {
        this.setState({searchText});
    }

    onItemsPerPageSelect(itemsPerPage) {
        this.setState({itemsPerPage});
    }

    onRowSelection(selectedRows) {
        if (this.state.canSelectRows) {
            this.setState({selectedRows});
        }
    }

    pageCount() {
        let {itemsPerPage, dataManager} = this.state;
        return Math.ceil(dataManager.getItemCount() / itemsPerPage);
    }

    render() {
        return (
            <TablePresentation
                filterOptions={this.state.dataManager.getFilterOptions()}
                sortColumn={this.state.sortColumn}
                sortOrder={this.state.sortOrder}
                selectedFilters={this.state.selectedFilters}
                activePage={this.state.activePage}
                searchText={this.state.searchText}
                pageCount={this.pageCount()}
                itemsPerPage={this.state.itemsPerPage}
                selectedRows={this.state.selectedRows}
                itemCount={this.state.dataManager.getItemCount()}

                onSearch={this.onSearch.bind(this)}
                onSort={this.onSort.bind(this)}
                onFilter={this.onFilter.bind(this)}
                onPageSelect={this.onPageSelect.bind(this)}
                onItemsPerPageSelect={this.onItemsPerPageSelect.bind(this)}
                onRowSelection={this.onRowSelection.bind(this)}

                visibleRows={this.state.dataManager.getVisibleRows(this.state)}
            >
                {this.props.children}
            </TablePresentation>
        );
    }
}

export default TableController;
