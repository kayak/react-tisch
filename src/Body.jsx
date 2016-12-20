import React from "react";

const Cell = ({rowData, column}) => {
    let fn = column.props.value;
    return <td>{fn ? fn(rowData) : ''}</td>;
};

const Row = ({columns, row, selected, onRowToggle}) =>
    <tr className={selected ? 'info': ''} onClick={() => onRowToggle(row.index, !selected)}>{
        columns.map((column, i) => <Cell rowData={row.data} column={column} key={i}/>)
    }</tr>;

const Body = ({visibleRows, columns, selectedRows, onRowToggle}) =>
    <tbody>
    {visibleRows.map((row, i) => <Row key={i} row={row} columns={columns} selected={!!selectedRows[row.index]}
                                      onRowToggle={onRowToggle} />)}
    </tbody>;

Body.Row = Row;
Body.Cell = Cell;

export default Body;