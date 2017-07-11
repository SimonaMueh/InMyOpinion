import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';




class SelectCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  };


  handleChange = (event, index, value) => {
    this.props.selectCategory(value);
    this.setState({value: value})
  }

  render() {
    console.log('in da SelectField',this.props.categories);
    return (
      <div>
          <SelectField
            floatingLabelText="Select Category"
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
          >
            {
              this.props.categories.map((category) => {
                return <MenuItem key={category.id} value={category.id} primaryText={category.text}/>
              })
            }
          </SelectField>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  categories: Object.values(state.categoryReducer),
});

export default connect(mapStateToProps)(SelectCategory);

// this.props.categories.map((category, index) => {
//   return <MenuItem key={category.id} value={index} primaryText={category.text}/>
