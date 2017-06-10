import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import SearchIcon from 'react-icons/lib/md/search';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
              className="form-control" 
              placeholder='Enter city to search forecast' 
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <button className="btn btn-info">
                <SearchIcon />
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);