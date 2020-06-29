import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import 'babel-polyfill';

import App from '../client/src/components/App';
import Reviews from '../client/src/components/Reviews';

describe('App component', () => {
  const listing = '001';

  it('should render', () => {
    const component = <App listing={listing} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch a listing', () => {
    const getSpy = jest.spyOn(axios, 'get');
    shallow(<App listing={listing} />);

    expect(getSpy).toBeCalled();
  });

  it('invalid path should not be directed', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/invalidPath']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(Reviews)).toHaveLength(0);
  });

  // it('clicking the button should update state', () => {
  //   const wrapper = mount(<App listing={listing} />);

  //   expect(wrapper.state().modalOpen).toBe(false);
  //   wrapper.find('button').simulate('click');
  //   expect(wrapper.state().modalOpen).toBe(true);
  // })
});
