import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardsList } from '../components/UI/CardsList';
import { SearchField } from '../components/SearchField';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobocats } from '../actions';

const mapStateToProps = state => ({
  searchField: state.searchCats.searchField,
  isPending: state.requestRobocats.isPending,
  robocats: state.requestRobocats.robocats,
  error: state.requestRobocats.error
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobocats: () => dispatch(requestRobocats())
})

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobocats()
  }

  render() {
    const { searchField, onSearchChange, robocats, isPending } = this.props;
    let cats = robocats.filter(cat => cat.username.includes(searchField))
    if(isPending) {
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
