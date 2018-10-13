import React, { Component } from 'react';
import { CardsList } from '../UI/CardsList';
import { SearchField } from '../SearchField/SearchField';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobocats()
  }

  filterRobocats = () => {
      const { robocats, searchField } = this.props;
    return robocats.filter(cat => cat.username.includes(searchField));
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    
    if(isPending) {
      return <h2>Loading</h2>
    }
    return (
      <div className="MainPage MainPage-container">
        <header className="MainPage-header">
          <h1 className="MainPage-title">Robocats</h1>
          <h2>Here you can find a new cute pet!</h2>
          <SearchField onSearch={onSearchChange}/>
        </header>
        <ErrorBoundary>
          <CardsList data={this.filterRobocats()}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;