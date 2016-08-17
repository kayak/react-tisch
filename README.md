# react-tisch

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f65c5b755f6d499a883e293332da2da6)](https://www.codacy.com/app/remi-k2620/react-tisch?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kayak/react-tisch&amp;utm_campaign=Badge_Grade)
[![David](https://img.shields.io/david/kayak/react-tisch.svg)](https://david-dm.org/kayak/react-tisch)
[![David](https://img.shields.io/david/dev/kayak/react-tisch.svg)](https://david-dm.org/kayak/react-tisch)
[![David](https://img.shields.io/david/peer/kayak/react-tisch.svg)](https://david-dm.org/kayak/react-tisch)

Simple table component for react and react-bootstrap. It supports filtering, searching, ordering, pagination, and you
can use custom react components as the table's cells!

## Example

See the [demo](http://kayak.github.io/react-tisch/examples/index.html).

```js
import {Table, Column} from ReactTisch;
import {Glyphicon, Label} from ReactBootstrap;

const sampleData = [
  {
    "name": "Ida Roach",
    "eyeColor": "blue",
    "tags": ["magna", "in", "labore", "aliqua", "veniam"]
  },
  ...
];

const EyeColor = function ({eyeColor}) {
    return <Glyphicon glyph="eye-open" style={{color: eyeColor}}/>;
};

const Tags = function ({tags}) {
    return <div>{tags.map((tag, i) =>
            <Label bsStyle="default" key={i}>{tag}</Label>)}</div>;
};

ReactDOM.render(
    <Table data={sampleData}>
        <Column value={row => row.name}>Name</Column>
        <Column filter value={EyeColor} rawValue={row => row.eyeColor}>Eye color</Column>
        <Column value={Tags}>Tags</Column>
    </Table>,
    document.getElementById('example')
);
```

## Development

Build with `npm run build`.

Test with `npm run test`.

## License

Copyright 2016 KAYAK Germany, GmbH

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.