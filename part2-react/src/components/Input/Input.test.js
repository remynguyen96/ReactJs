import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';
import Wrapper from './Wrapper';

describe('<InputComponent />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
       props = {
           className: 'className',
           validate: false,
           required: false,
           onChange: jest.fn(),
       };
       wrapper = shallow(<Input />);
    });

    it('should render component Wrapper', () => {
        const wrapperComponent =  wrapper.find(Wrapper);
        expect(wrapperComponent.length).toBe(1);
    });

    it('should call function onChange', () => {
        wrapper.setProps({
            className: 'className',
            validate: false,
        });
        const input = wrapper.find('input');
        input.simulate('change', { target: {value: 'change input successful !'} });
        wrapper.instance().observableInput.complete();
        expect(wrapper.state('validationStarted')).toBeTruthy();
        wrapper.setProps({ validate: true });
        wrapper.unmount();
    });
});
