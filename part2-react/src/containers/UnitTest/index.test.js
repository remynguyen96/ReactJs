import React from 'react';
import {shallow} from 'enzyme';
import UnitTest from './index';


describe('unit test demo here <UnitTest />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UnitTest/>);
    });

    it('includes 1 div with class foo', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('includes a span with test, txt', () => {
        expect(wrapper.find('span.bar').text()).toBe('Testing Here !!!');
    });
});
