import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';

import 'babel-polyfill';

import Modal from '../client/src/components/Modal';

describe('Modal component', () => {

  it('should render', () => {
    const component = <Modal />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Rating and AllReviewsComponent ', () => {
    const wrapper = mount(<Modal listing={listing} />);

    expect(wrapper.exists('Rating')).toBe(true);
    expect(wrapper.exists('AllReviews')).toBe(true);
  });
});