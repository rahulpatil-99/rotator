import React from 'react';
import { shallow } from 'enzyme';
import Standup from './../../src/components/StandUp';

describe('StandUp Component', () =>{
    it('should display a name', () => {
        const name = "Name";
        const component = shallow(Standup({name}));
        expect(component.contains(name)).toBeTruthy();
    });
});