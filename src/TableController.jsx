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
        canSelectRows: false,
        forcedRedrawData: null
    };

    static propTypes = {
        data: React.PropTypes.array,
        dataManager: React.PropTypes.object,
        children: React.PropTypes.node.isRequired
    };

    updateStateFromProps(props) {
        if (props.dataManager) {
            // Allow passing a custom data manager for e.g. custom filtering or server-side data fetching
            this.setState({dataManager: props.dataManager});
        } else if (props.data || !this.state.dataManager) {
            let columns = React.Children.toArray(this.props.children);
            this.setState({
                dataManager: new DataManager(props.data || [], columns)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.updateStateFromProps(nextProps);
    }

    componentWillMount() {
        this.updateStateFromProps(this.props);
    }

    _setState(newState) {
        this.setState({
            forcedRedrawData: null,
            ...newState
        });
    }

    onSort(sortColumn, sortOrder) {
        this._setState({sortColumn, sortOrder});
    }

    onFilter(selectedFilters) {
        this._setState({selectedFilters});
    }

    onPageSelect(activePage) {
        this._setState({activePage});
    }

    onSearch(searchText) {
        this._setState({searchText});
    }

    onItemsPerPageSelect(itemsPerPage) {
        this._setState({itemsPerPage});
    }

    onRowSelection(selectedRows) {
        if (this.state.canSelectRows) {
            this._setState({selectedRows});
        }
    }

    pageCount(itemCount) {
        let {itemsPerPage} = this.state;
        return Math.ceil(itemCount / itemsPerPage);
    }

    onDataUpdate(newData) {
        this.setState({
            forcedRedrawData: newData
        });
    }

    render() {
        let data = this.state.forcedRedrawData ||
            this.state.dataManager.getData(this.state, this.onDataUpdate.bind(this));


        return (
            <TablePresentation
                filterOptions={data.filterOptions}
                sortColumn={this.state.sortColumn}
                sortOrder={this.state.sortOrder}
                selectedFilters={this.state.selectedFilters}
                activePage={this.state.activePage}
                searchText={this.state.searchText}
                pageCount={this.pageCount(data.itemCount)}
                itemsPerPage={this.state.itemsPerPage}
                selectedRows={this.state.selectedRows}
                itemCount={data.itemCount}

                onSearch={this.onSearch.bind(this)}
                onSort={this.onSort.bind(this)}
                onFilter={this.onFilter.bind(this)}
                onPageSelect={this.onPageSelect.bind(this)}
                onItemsPerPageSelect={this.onItemsPerPageSelect.bind(this)}
                onRowSelection={this.onRowSelection.bind(this)}

                visibleRows={data.visibleRows}
            >
                {this.props.children}
            </TablePresentation>
        );
    }
}

export default TableController;
