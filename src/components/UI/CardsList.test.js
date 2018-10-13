import React from 'react';
import { shallow } from 'enzyme';
import { CardsList } from './CardsList';

describe("<CardsList/>", () => {
    const mockRobocats = [{
        name: "Test",
        username: "foo@baz.bar"
    }];
    it('renders and match the snapshot', () => {
        expect(shallow( <CardsList data = { mockRobocats } />)).toMatchSnapshot();
        });
    });