import React from "react";
import {Table, Glyphicon, Pagination, FormControl, Col, Row, Grid} from "react-bootstrap";

import Filter from "./Filter";


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

        visibleRows: React.PropTypes.array,

        onSearch: React.PropTypes.func,
        onPageSelect: React.PropTypes.func,
        onSort: React.PropTypes.func,
        onFilter: React.PropTypes.func
    };

    onFilterChange(event, columnIndex) {
        let selectedFilters = this.props.selectedFilters.slice(); // create a copy: can't mutate props
        selectedFilters[columnIndex] = event.target.value;
        this.props.onFilter(selectedFilters);
    }

    onSearch(event) {
        this.props.onSearch(event.target.value);
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
        return children.map(this.filter.bind(this))
    }

    dataCell(row, column, i) {
        let fn = column.props.value;
        return <td key={i}>{fn ? fn(row) : ''}</td>
    }

    dataRow(row, i) {
        return <tr key={i}>{this.props.children.map((column, i) => this.dataCell(row, column, i))}</tr>;
    }

    dataRows() {
        return this.props.visibleRows.map(this.dataRow.bind(this))
    }

    toggleSort(columnIndex) {
        let sortOrder = columnIndex === this.props.sortColumn ? -this.props.sortOrder : 1;
        this.props.onSort(columnIndex, sortOrder);
    }

    header() {
        let {children} = this.props;
        return children.map((child, i) => React.cloneElement(child, {
            key: i,
            onToggleSort: () => this.toggleSort(i),
            sortOrder: this.props.sortColumn === i ? this.props.sortOrder : 0,
            ...child.props
        }));
    }

    render() {
        let header = this.header(),
            filters = this.filters(),
            dataRows = this.dataRows(),
            {pageCount, activePage, onPageSelect, searchText} = this.props;

        return (
            <Grid className="form-inline">
                <Row>
                    <Col md={6}>
                        Show{' '}
                        <FormControl componentClass="select" placeholder="select" className="input-sm">
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
                            <tr>
                                {header}
                            </tr>
                            <tr>
                                {filters}
                            </tr>
                            </thead>
                            <tbody>
                            {dataRows}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        Showing x to y of z entries
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
        )
    }
}



export default TablePresentation;