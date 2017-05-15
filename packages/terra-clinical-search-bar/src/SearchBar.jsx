import React, { PropTypes } from 'react';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import './SearchBar.scss';

const propTypes = {
  placeholder: PropTypes.string,
  minimumSearchTextLength: PropTypes.number,
  searchDelay: PropTypes.number,
  onSearch: PropTypes.func,
};

const defaultProps = {
  placeholder: '',
  minimumSearchTextLength: 2,
  searchDelay: 250,
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.searchTimeout = null;
    this.state = {
      searchText: '',
    };
  }

  handleTextChange(event) {
    this.setState({ searchText: event.target.value });

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
  }

  handleSearch() {
    if (this.props.onSearch && this.state.searchText.length >= this.props.minimumSearchTextLength) {
      this.props.onSearch(this.state.searchText);
    }
  }

  render() {
    return (
      <div className="terraClinical-SearchBar">
        <input className="terraClinical-SearchBar-input" type="search" placeholder={this.props.placeholder} value={this.state.searchText} onChange={this.handleTextChange} />
        <Button className="terraClinical-SearchBar-button" onClick={this.handleSearch}>
          <IconSearch />
        </Button>
      </div>
    );
  }

}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
