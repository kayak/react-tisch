# Simple example

Building a react-tisch table is easy, you only need 3 things.

1. The data

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

2. Cell definitions

One of react-tisch main strengths is that you can use react components in the table's cells.

```jsx
import {Glyphicon, Label} from ReactBootstrap;

const EyeColor = function ({eyeColor}) {
    return <Glyphicon glyph="eye-open" style={{color: eyeColor}}/>
};

const Tags = function ({tags}) {
    return <div>{tags.map((tag, i) =>
            <Label bsStyle="default" key={i}>{tag}</Label>)}</div>
};
```

3. Table definition

To define the react-tisch table, you need to render the Table component with Column components as immediate children.The Column component should contain the column title (which can also be a react component), and need at least to have the prop "value", which is a function taking the row as argument and returning the cell value.

```jsx
import {Table, Column} from ReactTisch;

<Table data={sampleData}>
    <Column value={row => row.name}>Name</Column>
    <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
    <Column value={Tags}>Tags</Column>
</Table>
```

# Custom data manager

You can define your own data manager or extend the existing one to change any of the default behaviour. Instead of passing a data prop, simply pass a dataManager prop. It needs to have three methods: getItemCount, getFilterOptions and getVisibleRows. Refer to the documentation for more details.

```jsx
import {Table, Column} from "react-tisch";

class DataManager {
    // Note: visibleRows should take into account the state (searchText, selectedFilters, etc). Refer to the
    // documentation for more details.
    getData: (state) => ({
        itemCount: 2,
        filterOptions: [[]],
        visibleRows: [{index: 0, data: {name: 'Joe'}}, {index: 1, data: {name: 'Mike'}}]
    })
}

const dataManager = new DataManager();

<Table getData={dataManager.getData}>
    <Column value={row => row.name}>Name</Column>
</Table>
```

Note that if `getData` was a regular class method rather than a fat arrow, you would need to bind it with
`dataManager.getData.bind(dataManager)`. More on binding [here](http://www.2ality.com/2013/06/auto-binding.html).