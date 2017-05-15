import React from 'react';
import SearchBar from 'terra-clinical-search-bar';

class SearchBarMinimumLength extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleSearch(text) {
    this.setState({ searchText: text });
  }

  render() {
    return (
      <div>
        <div>
          Search Text: {this.state.searchText}
        </div>
        <SearchBar minimumSearchTextLength={5} onSearch={this.handleSearch} />
      </div>
    );
  }

}

export default SearchBarMinimumLength;
