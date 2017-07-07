import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import qs from 'query-string';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AddIcon from 'material-ui/svg-icons/content/add';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';

const styles = {
  customWidth: {
    width: 250
  }
};

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    console.log('in da navbar', this.props);
    return (
      <div >
        <Toolbar>
          <ToolbarGroup firstChild={true}></ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Category: show all"/>
              <MenuItem value={2} primaryText="Every Night"/>
            </DropDownMenu>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="find a topic" onChange={this.handleSearch} value={this.state.query}/>
            </form>
            <SearchIcon/>
            <AddIcon/>
            <ReorderIcon/>
          </ToolbarGroup>
        </Toolbar>

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default connect()(Navbar);
