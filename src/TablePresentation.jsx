import React from "react";
import {Table, Pagination, FormControl, Col, Row, Grid} from "react-bootstrap";

import Filter from "./Filter";
import TableHeader from "./TableHeader";
import Body from "./Body";


class TablePresentation extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,

        pageCount: React.PropTypes.number,
        activePage: React.PropTypes.number,
        filterOptions: React.PropTypes.array,
        sortColumn: React.PropTypes.number,
        sortOrder: React.PropTypes.number,
        selectedFilters: React.PropTypes.array,
        searchText: React.PropTypes.string,
        itemsPerPage: React.PropTypes.number,
        itemCount: React.PropTypes.number,
        selectedRows: React.PropTypes.object,

        visibleRows: React.PropTypes.array,

        onSearch: React.PropTypes.func,
        onPageSelect: React.PropTypes.func,
        onSort: React.PropTypes.func,
        onFilter: React.PropTypes.func,
        onItemsPerPageSelect: React.PropTypes.func,
        onRowSelected: React.PropTypes.func
    };

    onFilterChange(event, columnIndex) {
        let selectedFilters = this.props.selectedFilters.slice(); // create a copy: can't mutate props
        selectedFilters[columnIndex] = event.target.value;
        this.props.onFilter(selectedFilters);
    }

    onSearch(event) {
        this.props.onSearch(event.target.value);
    }

    onItemsPerPageSelect(event) {
        this.props.onItemsPerPageSelect(parseInt(event.target.value));
    }

    onRowToggle(rowIndex, selected) {
        let selectedRows = {
            ...this.props.selectedRows,
            [rowIndex]: selected
        };
        this.props.onRowSelection(selectedRows);
    }

    filter(column, i) {
        let filterOptions = this.props.filterOptions[i] || [];

        return <Filter
            key={i}
            filter={column.props.filter}
            filterOptions={filterOptions}
            onChange={event => this.onFilterChange(event, i)}
        />;
    }

    filters() {
        let {children} = this.props;
        return React.Children.map(children, this.filter.bind(this));
    }

    shownEntriesText() {
        let {itemsPerPage, itemCount, activePage} = this.props;
        if (itemCount <= itemsPerPage) {
            return `Showing ${itemCount} of ${itemCount} entries`;
        }

        return `Showing ${(activePage - 1) * itemsPerPage + 1} to ${activePage * itemsPerPage} of ${itemCount} entries`;
    }

    render() {
        let filters = this.filters(),
            {pageCount, activePage, onPageSelect, searchText, sortColumn, sortOrder, onSort, visibleRows,
            selectedRows, itemsPerPage} = this.props,
            columns = React.Children.toArray(this.props.children);

        return (
            <Grid className="form-inline">
                <Row>
                    <Col md={6}>
                        Show{' '}
                        <FormControl
                            className="input-sm select-entry-count"
                            componentClass="select"
                            onChange={this.onItemsPerPageSelect.bind(this)}
                            placeholder="select"
                            value={itemsPerPage}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </FormControl>
                        {' '}entries
                    </Col>
                    <Col md={6}>
                        <div className="pull-right">
                            Search:{' '}
                            <FormControl
                                type="text"
                                value={searchText}
                                placeholder=""
                                onChange={this.onSearch.bind(this)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Table className="table text-center table-condensed table-hover" cellSpacing="0"
                               id="data-table">
                            <thead>
                            <TableHeader
                                onSort={onSort}
                                sortColumn={sortColumn}
                                sortOrder={sortOrder}
                                columns={columns}/>
                            <tr>
                                {filters}
                            </tr>
                            </thead>
                            <Body
                                visibleRows={visibleRows}
                                selectedRows={selectedRows}
                                onRowToggle={this.onRowToggle.bind(this)}
                                columns={columns}/>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="shown-entries">
                        {this.shownEntriesText()}
                    </Col>
                    <Col md={6}>
                        <div className="pull-right">
                            <Pagination
                                prev
                                next
                                ellipsis
                                boundaryLinks
                                items={pageCount}
                                maxButtons={5}
                                activePage={activePage}
                                onSelect={onPageSelect}/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TablePresentation;