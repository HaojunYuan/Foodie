import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>foodie</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
