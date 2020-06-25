import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';
import styled from 'styled-components';

import { reviews } from '../__mocks__/mockData.js';
import PreviewEntry from '../client/src/components/PreviewEntry.jsx';

describe('Preview Entry Components', () => {

  const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: row;
`
const entry = reviews[0];

  it('should render', () => {
    const component = <PreviewEntry review={entry} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render an image from S3', () => {
    
    const url = `https://dteamdp.s3-us-west-2.amazonaws.com/pug11.jpg`

    const wrapper = mount(<PreviewEntry review={entry} />);
    expect(wrapper.find('img').prop('src')).toEqual(url)

  })
})