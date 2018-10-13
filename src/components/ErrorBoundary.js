import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        isError: false
    }

    componentDidCatch(error, info) {
        this.setState({ isError: true })
    }
    
    render() {
        return (
            this.state.isError ? 
            <p>Oups... Something goes wrong!</p>
            :
            this.props.children
        )
    }
}