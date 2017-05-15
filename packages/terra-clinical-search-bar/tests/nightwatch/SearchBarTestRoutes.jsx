/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SearchBarTests from './SearchBarTests';
import DefaultSearchBar from './DefaultSearchBar';
import PlaceholderSearchBar from './PlaceholderSearchBar';

const routes = (
  <div>
    <Route path="/tests/search-bar-tests" component={SearchBarTests} />
    <Route path="/tests/search-bar-tests/default" component={DefaultSearchBar} />
    <Route path="/tests/search-bar-tests/placeholder" component={PlaceholderSearchBar} />
  </div>
);

export default routes;
