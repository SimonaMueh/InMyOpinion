import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import qs from 'query-string';
import '../../style.css';

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
  handlePlusClick = () => this.props.history.push('/categories');

  render() {
    console.log('in da navbar', this.props);
    return (
      <div >
        <Toolbar className="NavbarNavbar">
          <ToolbarGroup firstChild={true}></ToolbarGroup>
          <ToolbarGroup>
            <DropDownMenu className="NavbarDropDown" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Select Category"/>
              <MenuItem value={2} primaryText="Every Night"/>
            </DropDownMenu>
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="find a topic" onChange={this.handleSearch} value={this.state.query}/>
            </form>
            <SearchIcon className="NavbarSearch"/>
            <AddIcon className="NavbarAdd" onTouchTap = {this.handlePlusClick}/>
            <ReorderIcon className="NavbarReorder"/>
          </ToolbarGroup>
        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}


//Maybe not needed
const mapStateToProps = (state, props) =>{
  console.log('indaMapStateToProps1', props);
    return state.topicReducer;
}

export default connect(mapStateToProps)(withRouter(Navbar));
