import Body from "../src/Body";

export function getColumnValues(table, columnIndex) {
    return table.find(Body.Row).map(row => row.find(Body.Cell).at(columnIndex).text());
}
