import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe("<Card/>", () => {
    it('renders and match the snapshot', () => {
        expect(shallow(<Card />)).toMatchSnapshot();
    });
});