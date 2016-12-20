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
