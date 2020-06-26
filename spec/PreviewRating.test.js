import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';
import styled from 'styled-components';

import { cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg } from '../__mocks__/mockData.js';
import PreviewRating from '../client/src/components/PreviewRating.jsx';

describe('Preview Rating Components', () => {

  const stats = {
    cleanAvg: cleanAvg,
    commAge: commAvg,
    accuracyAvg: accuracyAvg,
    valueAvg: valueAvg,
    locationAvg: locationAvg,
    checkinAvg: checkinAvg
  }

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PreviewRating overview={stats} />)
  })

  it('should render', () => {
    const component = <PreviewRating overview={stats} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  })
})