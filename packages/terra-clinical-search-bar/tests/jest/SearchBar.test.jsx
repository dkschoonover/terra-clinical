import React from 'react';
import SearchBar from '../../src/SearchBar';


describe('Snapshots', () => {
  it('renders a basic search bar', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar).toMatchSnapshot();
  });

  it('renders a search bar with a placeholder', () => {
    const searchBar = shallow(<SearchBar placeholder="Test" />);
    expect(searchBar).toMatchSnapshot();
  });
});

describe('Manual Search', () => {
  it('triggers search on button press', () => {
    const onSearch = jest.fn();
    const searchBar = shallow(<SearchBar onSearch={onSearch} />);
    searchBar.setState({ searchText: 'Te' });

    expect(onSearch).not.toBeCalled();
    searchBar.childAt(1).simulate('click');
    expect(onSearch).toBeCalledWith('Te');
  });

  it('does not trigger search if default minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchBar = shallow(<SearchBar onSearch={onSearch} />);
    searchBar.setState({ searchText: 'T' });

    expect(onSearch).not.toBeCalled();
    searchBar.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not trigger search if minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchBar = shallow(<SearchBar onSearch={onSearch} minimumSearchTextLength={5} />);
    searchBar.setState({ searchText: 'Sear' });

    expect(onSearch).not.toBeCalled();
    searchBar.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not search when callback is not provided', () => {
    const searchBar = shallow(<SearchBar minimumSearchTextLength={5} />);
    searchBar.setState({ searchText: 'Searc' });

    searchBar.childAt(1).simulate('click'); // Verifies we do not attempt to call an undefined function.
  });
});

describe('Auto Search', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('triggers search after delay on text change', () => {
    const onSearch = jest.fn();
    const searchBar = shallow(<SearchBar onSearch={onSearch} />);

    searchBar.childAt(0).simulate('change', { target: { value: 'Te' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).toBeCalledWith('Te');
  });

  it('does not trigger search if minimum text length is not met', () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const searchBar = shallow(<SearchBar onSearch={onSearch} minimumSearchTextLength={5} />);

    searchBar.childAt(0).simulate('change', { target: { value: 'Sear' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).not.toBeCalled();
  });

  it('uses standard timeout for search delay when not provided', () => {
    const searchBar = shallow(<SearchBar />);

    searchBar.childAt(0).simulate('change', { target: {} });
    expect(setTimeout).toBeCalledWith(expect.anything(), 250);
  });

  it('uses custom timeout for search delay when provided', () => {
    const searchBar = shallow(<SearchBar searchDelay={1000} />);

    searchBar.childAt(0).simulate('change', { target: {} });
    expect(setTimeout).toBeCalledWith(expect.anything(), 1000);
  });
});
