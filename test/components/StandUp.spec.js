import React from 'react';
import { shallow } from 'enzyme';
import Standup from './../../src/components/StandUp';

describe('StandUp Component', () =>{
    it('should display a name', () => {
        const name = "Name";
        const component = shallow(Standup({name}));
        expect(component.contains(name)).toBeTruthy();
    });

    it('should contain the spin button', () => {
        const name = "Name";
        const component = shallow(Standup({name}));
        expect(component.contains(<button color={"green"} type={"button"} value={"SPIN"}/>)).toBeTruthy();
    });
});