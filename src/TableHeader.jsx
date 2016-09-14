import React from "react";

class TableHeader extends React.Component {

    onToggleSort(columnIndex) {
        let sortOrder = columnIndex === this.props.sortColumn ? -this.props.sortOrder : 1;
        this.props.onSort(columnIndex, sortOrder);
    }

    render() {
        let {columns, sortColumn, sortOrder} = this.props;

        return <tr>{columns.map((child, i) => React.cloneElement(child, {
            key: i,
            onToggleSort: () => this.onToggleSort(i),
            sortOrder: sortColumn === i ? sortOrder : 0,
            ...child.props
        }))}</tr>;
    }
}

export default TableHeader;
