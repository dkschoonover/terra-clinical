/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SearchBarTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/search-bar-tests/default">Default SearchBar</Link></li>
      <li><Link to="/tests/search-bar-tests/placeholder">Placeholder SearchBar</Link></li>
    </ul>
  </div>
);

export default SearchBarTests;
