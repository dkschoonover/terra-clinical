import React, { PropTypes } from 'react';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import './SearchBar.scss';

const propTypes = {
  /**
   * Placeholder text to show while the search field is empty.
   */
  placeholder: PropTypes.string,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,

  /**
   * How long the component should wait after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
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

    this.clearSearchTimeout();
    this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
  }

  handleSearch() {
    if (this.state.searchText.length >= this.props.minimumSearchTextLength) {
      this.clearSearchTimeout();

      if (this.props.onSearch) {
        this.props.onSearch(this.state.searchText);
      }
    }
  }

  clearSearchTimeout() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
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
