import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe("MainPage", () => {
    let wrapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobocats: jest.fn(),
            searchField: '',
            onSearchChange: jest.fn(),
            robocats: [],
            isPending: false
        };
        wrapper = shallow(<MainPage {...mockProps}/>)
    });

    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders Loading status if isPending: true', () => {
        const mockProps = {
            onRequestRobocats: jest.fn(),
            isPending: true
        };
        wrapper = shallow(<MainPage {...mockProps}/>);
        expect(wrapper.text()).toEqual('Loading');
    });

    it('filter robocats correctly', () => {
        expect(wrapper.instance().filterRobocats()).toEqual([]);

        const mockProps2 = {
            onRequestRobocats: jest.fn(),
            onSearchChange: jest.fn(),
            robocats: [{username: 'foo', name: "Foo Baz Bar"}],
            searchField: "fo",
            isPending: false
        }
        const wrapper2 = shallow(<MainPage {...mockProps2}/>);
        expect(wrapper2.instance().filterRobocats())
            .toEqual([{username: 'foo', name: "Foo Baz Bar"}]);

        const mockProps3 = {
            onRequestRobocats: jest.fn(),
            onSearchChange: jest.fn(),
            robocats: [{username: 'foo', name: "Foo Baz Bar"}],
            searchField: "ho",
            isPending: false
        }
        const wrapper3 = shallow(<MainPage {...mockProps3}/>);
        expect(wrapper3.instance().filterRobocats())
            .toEqual([]);
    });
});
