import React from 'react';
import { Book } from './book';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('<Book /> with no props', () => {
    const contextValues = [{
        id: 1,
        type:"novel",
        duration: 1,
        bookNum: 1
    }];
    jest
        .spyOn(React, 'useContext')
        .mockImplementation(() => contextValues);
    const wrapper = shallow(<Book />);

    test('should match the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('should have duration and bookNum field', () => {
      expect(wrapper.find('input[type="number"]').length).toEqual(2);
    });

    test('should have proper props for duration field', () => {
        expect(wrapper.find('input[type="number"]').first().props()).toEqual(expect.objectContaining({
          className: 'formField',
          type: 'number',
          value: 0,
          onChange: expect.any(Function),
          required: true
        }));
    });

    test('should have a submit button', () => {
        expect(wrapper.find('button[type="submit"]').first().props()).toEqual(expect.objectContaining({
            className: 'SubmitField',
            type: 'submit',
        }));
    });

    test('should have bookNum default props', () => {
        expect(wrapper.find('input[type="number"]').first().props()).toHaveProperty('value', 0,);
    });
});


