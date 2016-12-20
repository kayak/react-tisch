import React from "react";
import ReactDOM from "react-dom";

import Sample1 from "./Sample1";
import Sample2 from "./Sample2";


const Samples = {Sample1, Sample2};


const sampleList = Object.keys(Samples).map((sampleName, i) => {
    let Sample = Samples[sampleName];
    return (<div key={i}>
        <h2><a href={'#' + sampleName}>{sampleName}</a></h2>
        <Sample/>
    </div>);
});


class SamplePage extends React.Component {
    componentDidMount() {
        window.onhashchange = () => this.forceUpdate();
    }

    render() {
        let hash = window.location.hash.slice(1);

        if (hash === '') {
            return (<div>{sampleList}</div>);
        }
        else if (!Samples[hash]) {
            return <div>{`Sample "${hash}" doesn't exist`}</div>;
        } else {
            return React.createElement(Samples[hash]);
        }
    }
}


ReactDOM.render(
    <SamplePage/>,
    document.getElementById('examples-container')
);

