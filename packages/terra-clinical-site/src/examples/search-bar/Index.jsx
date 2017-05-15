/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-search-bar/docs/README.md';
import { version } from 'terra-clinical-search-bar/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SearchBarSrc from '!raw-loader!terra-clinical-search-bar/src/SearchBar';

// Example Files
import SearchBarBasic from './SearchBarBasic';
import SearchBarPlaceholder from './SearchBarPlaceholder';
import SearchBarMinimumLength from './SearchBarMinimumLength';
import SearchBarDelayed from './SearchBarDelayed';

const ClinicalSearchBarExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SearchBarSrc} />
    <h2 id="searchBar">Search Bar</h2>
    <SearchBarBasic />
    <br />
    <h2 id="searchBarPlaceholder">Search Bar with placeholder text</h2>
    <SearchBarPlaceholder />
    <br />
    <h2 id="searchBarMinimumLength">Search Bar with minimum search text length of 5 characters</h2>
    <SearchBarMinimumLength />
    <h2 id="searchBarDelayed">Search Bar with delay of 2000ms</h2>
    <SearchBarDelayed />
  </div>
);

export default ClinicalSearchBarExamples;
