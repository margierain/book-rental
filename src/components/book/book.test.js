import React from 'react';
import { Book } from './book';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, screen} from '@testing-library/react';
// import * as sinon from 'sinon';
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

describe('Book FC with no props', () => {
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

    // test('should match the snapshot', () => {
    //   expect(wrapper.html()).toMatchSnapshot();
    // });

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
        expect(wrapper.find('input[type="number"]').first().props()).toHaveProperty('value', 0);
    });
});

describe('Book FC with other props', () => {
  const contextValues = [{
      id: 1,
      type:"novel",
      duration: 1,
      bookNum: 2
  }];

  jest
  .spyOn(React, 'useContext')
  .mockImplementation(() => contextValues);

  const setup = () => {
    const utils = render(<Book />)
    const input = utils.getByLabelText('durationInput')
    const form = utils.getByLabelText('submit')
    return {
      input,
      form,
      ...utils,
    }
  }


  test('renders', () => {
    const { form } = setup()
    // const addItem = jest.fn();

    fireEvent.submit(form);
    // fireEvent.click(button, { duration: '1', bookNum: '2' });
    // expect(addItem).toHaveBeenCalledTimes(1);

    // const exampleInput = screen.getByPlaceholderText(container, '0')


    })

    test('should not allow letters to be inputted', () => {
      const { input } = setup()
      expect(input.value).toBe('0')
      fireEvent.change(input, { target: { duration: 'Good Day' } })
      expect(input.value).toBe('0')
    })

    test('should not allow empty input', () => {
      const { input } = setup()
      expect(input.value).toBe('0')
      fireEvent.change(input, { target: { duration: '' } })
      expect(input.value).toBe('0')
    })

    test('should handleInputChange for duration and bookNum fields', () => {
      const { input } = setup()
      fireEvent.change(input, { target: { duration: '1', bookNum: '2' } })
      expect(input.duration).toBe('1')
      expect(input.bookNum).toBe('2')
    });
});