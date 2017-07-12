import React, {Component} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import '../../style.css';


import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AddIcon from 'material-ui/svg-icons/content/add';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';
import SelectField from 'material-ui/SelectField';


const styles = {
  customWidth: {
    width: 250
  }
};

class Navbar extends Component {


//topic filter should be in react
//dispatch an action to the category filter instead of seting the state here
//then the topics can be filtered

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  handlePlusClick = () => this.props.history.push('/createNew');
// add all topics in SelectField
  render() {
    console.log('in da navbar', this.props);
    return (
      <div >
        <Toolbar className="NavbarNavbar">
          <ToolbarGroup firstChild={true}></ToolbarGroup>
          <ToolbarGroup>
            <SelectField
              floatingLabelText="Select Category"
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth={true}
            >
              <MenuItem value={0} primaryText="all" />
              {
                this.props.categories.map((category) => {
                  return <MenuItem key={category.id} value={category.id} primaryText={category.text}/>
                })
              }
            </SelectField>

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
// const mapStateToProps = (state, props) =>{
//   console.log('indaMapStateToProps1', props);
//     return state.topicReducer;
// }

const mapStateToProps = (state) => ({
  categories: Object.values(state.categoryReducer),
  topics: state.topicReducer,
})

export default connect(mapStateToProps)(withRouter(Navbar));


// <DropDownMenu className="NavbarDropDown" value={this.state.value} onChange={this.handleChange}>
//   <MenuItem value={1} primaryText="Select Category"/>
//   <MenuItem value={2} primaryText="Every Night"/>
// </DropDownMenu>
