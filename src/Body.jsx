import React from "react";

const Cell = ({row, column}) => {
    let fn = column.props.value;
    return <td>{fn ? fn(row) : ''}</td>;
};

const Row = ({columns, row}) =>
    <tr>{columns.map((column, i) => <Cell row={row} column={column} key={i}/>)}</tr>;

const Body = ({visibleRows, columns}) =>
    <tbody>
    {visibleRows.map((row, i) => <Row key={i} row={row} columns={columns} />)}
    </tbody>;

Body.Row = Row;
Body.Cell = Cell;

export default Body;