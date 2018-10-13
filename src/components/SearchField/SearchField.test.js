import React from 'react';
import { shallow } from 'enzyme';
import { SearchField } from './SearchField';

describe("<SearchField/>", () => {
    it('renders and match the snapshot', () => {
        expect(shallow(<SearchField />)).toMatchSnapshot();
    });
});