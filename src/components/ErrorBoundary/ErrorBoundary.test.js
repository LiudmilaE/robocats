import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

function Something() {
    // this is just a placeholder
    return null;
}

describe("<ErrorBoundary/>", () => {
    it('should catch errors with componentDidCatch', () => {
        const error = new Error('hi!');
        const wrapper = shallow(
            <ErrorBoundary > 
                <Something />
            </ErrorBoundary> 
        );
        expect(wrapper.state()).toEqual({ isError: false }); 
        wrapper.find(Something).simulateError(error);
        expect(wrapper.state()).toEqual({ isError: true }); 
      });
});