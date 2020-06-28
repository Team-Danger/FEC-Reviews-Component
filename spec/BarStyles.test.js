import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import { Bar } from '../client/src/components/styles/propStyles.style'

test('it applies default styles', () => {
  const bar = renderer.create(<Bar />).toJSON()
  expect(bar).toHaveStyleRule('margin-top', '0');
})

test('it applies styles according to passed props', () => {
  const bar = renderer.create(<Bar width='1px' height='2px' margin='3px' color='red' />).toJSON()
  expect(bar).toHaveStyleRule('width', '1px');
  expect(bar).toHaveStyleRule('height', '2px');
  expect(bar).toHaveStyleRule('margin-top', '3px');
  expect(bar).toHaveStyleRule('background-color', 'red');
})
