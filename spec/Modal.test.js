import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import 'babel-polyfill';

import Modal from '../client/src/components/Modal';
import mockData from '../__mocks__/mockData';

describe('Modal component', () => {
  const { reviews, ...rest } = mockData;
  const mockState = { modalOpen: true }
  const mockFunction = jest.fn();

  it('should render', () => {
    const component = <Modal overview={rest} reviews={reviews} modalOpen={mockState} toggleModal={mockFunction}/>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Rating, AllReviews Components', () => {
    const wrapper = mount(<Modal overview={rest} reviews={reviews} modalOpen={mockState} toggleModal={mockFunction}/>);

    expect(wrapper.exists('Rating')).toBe(true);
    expect(wrapper.exists('AllReviews')).toBe(true);
  });
});