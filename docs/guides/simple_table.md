# Simple example

Building a react-tisch table is easy, you only need 3 things.

## 1. The data

```jsx
const sampleData = [
  {
    "name": "Ida Roach",
    "eyeColor": "blue",
    "tags": ["magna", "in", "labore", "aliqua", "veniam"]
  },
  ...
];
```

## 2. Cell definitions

One of react-tisch main strengths is that you can use react components in the table's cells.

```jsx
import {Glyphicon, Label} from "react-bootstrap";

const EyeColor = function ({eyeColor}) {
    return <Glyphicon glyph="eye-open" style={{color: eyeColor}}/>
};

const Tags = function ({tags}) {
    return <div>{tags.map((tag, i) =>
            <Label bsStyle="default" key={i}>{tag}</Label>)}</div>
};
```

## 3. Table definition

To define the react-tisch table, you need to render the Table component with Column components as immediate children inside a React-Bootstrap <Grid> container. The Column component should contain the column title (which can also be a react component), and need at least to have the prop "value", which is a function taking the row as argument and returning the cell value.

```jsx
import {Grid} from "react-bootstrap";
import {Table, Column} from "react-tisch";

<Grid>
    <Table data={sampleData}>
        <Column value={row => row.name}>Name</Column>
        <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
        <Column value={Tags}>Tags</Column>
    </Table>
</Grid>
```

## Demo

<iframe src="../../demo/index.html#Sample1">
</iframe>
