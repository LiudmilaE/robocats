import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';

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

  render() {
    return <MainPage {...this.props}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
