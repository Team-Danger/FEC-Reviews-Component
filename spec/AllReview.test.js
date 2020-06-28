import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import mockData from '../__mocks__/mockData';
import AllReviews from '../client/src/components/AllReviews';

describe('ReviewsSummary component', () => {
  const { reviews, ...rest } = mockData;
  const { userDp, userName } = rest;

  it('should render', () => {
    const component = <AllReviews reviews={reviews} userDp={userDp} userName={userName} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Reviews Entry component', () => {
    const wrapper = mount(<AllReviews reviews={reviews} userDp={userDp} userName={userName} />);

    expect(wrapper.exists('ReviewEntry')).toBe(true);
  });
});
