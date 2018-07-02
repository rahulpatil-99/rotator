import React from 'react';
import { shallow } from 'enzyme';
import Standup from './../../src/components/StandUp';

describe('StandUp Component', () =>{
    it('should display a name', () => {
        const someName = "Name";
        const component = shallow(<Standup name={someName} />);
        expect(component.props().children[0]).toEqual(someName);
    });

    it('should contain the spin button', () => {
        const component = shallow(<Standup name="Some Name" />);
        expect(component.find("button").exists()).toBeTruthy();
    });
});