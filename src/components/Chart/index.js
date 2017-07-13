import React from "react";
import { findDOMNode } from "react-dom";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import BubbleChart from "../BubbleChart";


class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.chartToClassMappings = {
            bubble: BubbleChart,
        };
    }

    componentDidMount() {
        if (Object.keys(this.props.data).length === 0) {
            return;
        }

        const el = findDOMNode(this);

        if (this.props.type === "custom") {
            this.chart = new this.props.customChart(el, this.props);
        } else {
            this.chart = new this.chartToClassMappings[this.props.type](el, this.props);
        }

        this.chart.create(this.props.data);
    }

    componentDidUpdate() {
        this.chart.update(this.props.data);
    }

    componentWillUnmount() {
        this.chart.unmount();
    }

    render() {
        return (<div className="chart"></div>);
    }
}

export default connect()(withRouter(Chart));
