import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';




class SelectCategory extends Component {
  componentDidMount(){
      fetch('http://localhost:8080/categories')
      .then(parseJSON => parseJSON.json())
      .then(data => {
      // console.log('in da componentDidMount' ,data);
        this.props.dispatch({
          type: 'GETCATEGORIES',
          categories: data,
        })
      });
      console.log(this.props);
  }

  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    console.log('in da SelectField',this.props.categories);
    return (
      <div>
          <SelectField
            floatingLabelText="Select Category"
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
            hintTExt={"select Category"}
          >
            {
              this.props.categories.map((category, index) => {
                return <MenuItem key={category.id} value={index} primaryText={category.text}/>
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
