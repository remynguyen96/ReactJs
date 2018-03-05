import React from 'react';
import {shallow} from 'enzyme';
import Counter from './index';

describe('Unit test for <CounterComponent />', () => {
   let wrapper;
   beforeEach(() => {
       wrapper = shallow(<Counter />);
   });

   it('starts with a component !', () => {
       // console.log(wrapper.html());
      const countState = wrapper.state('counter');
      expect(countState).toEqual(0);
   });

   it('find text in component', () => {
        const findText = wrapper.find('h4').text();
        expect(findText).toBe('Current Counter: 0')
   });

   it('should call function click increment', () => {
      const button = wrapper.find('button');
      button.simulate('click');
      expect(wrapper.state('counter')).toBeGreaterThan(0);
   });
});
