import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardsList } from '../components/UI/CardsList';
import { SearchField } from '../components/SearchField';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => ({
  searchField: state.searchCats.searchField
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({data})
      })
  }

  render() {
    const { data } = this.state;
    const { searchField, onSearchChange } = this.props;
    let cats = data.filter(cat => cat.username.includes(searchField))
    if(data && !data.length) {
      return <h2>Loading</h2>
    }
    return (
      <div className="App App-container">
        <header className="App-header">
          <h1 className="App-title">Robocats</h1>
          <h2>Here you can find a new cute pet!</h2>
          <SearchField onSearch={onSearchChange}/>
        </header>
        <ErrorBoundary>
          <CardsList data={cats}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
