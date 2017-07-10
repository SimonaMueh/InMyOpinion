import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class ProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {

    const max = this.props.totalYes > this.props.totalNo ? this.props.totalYes : this.props.totalNo;

    if (completed > max) {
      this.setState({completed: max});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 100);
    }
  }

  render() {
    return (
      <LinearProgress
        className="progress"
        mode="determinate"
        value={this.state.completed}
        color={this.props.totalYes >= this.props.totalNo ? "MediumSeaGreen" : "tomato"}
        max={this.props.totalVotes}
        min={0}
        />
    );
  }
}
