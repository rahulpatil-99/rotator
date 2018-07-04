import React from 'react';
import { shallow } from 'enzyme';
import Standup from './../../src/components/StandUp';

describe('StandUp Component', () =>{
    it('should display the names', () => {
        const names = ["someName", "anotherName"];
        const component = shallow(<Standup name={names} />);
        expect(component.props().children[0]).toEqual((names).join("     "));
    });

    it('should contain the spin button', () => {
        const component = shallow(<Standup name="Some Name" />);
        expect(component.find("button").exists()).toBeTruthy();
    });
});