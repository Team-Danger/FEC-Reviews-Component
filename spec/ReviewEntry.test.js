import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';
import { mount } from 'enzyme';

import ReviewEntry from '../client/src/components/ReviewEntry';

describe('Review Entry Component', () => {
  const reviewOne = {
    reviewer_name: 'Michael',
    dp: '11',
    date: '2016-07-19T19:33:37.736Z',
    body: 'here is some text',
  };

  const reviewTwo = {
    reviewer_name: 'Wonil',
    dp: '5',
    date: '2014-06-18T15:22:37.736Z',
    body: 'here is some text',
    respond: 'this is a response'
  };

  const userName = 'Josh';
  const userDp = '1'; 

  it('should render', () => {
    const component = <ReviewEntry review={reviewOne} userName={userName} userDp={userDp}/>;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should only render the reviewer avatar from s3 when there is no response', () => {
    const wrapperOne = mount(<ReviewEntry review={reviewOne} />);
    const urlReview = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${reviewOne.dp}.jpg`;

  });

  it('should render lister avatar and reviewer avatar when there is response', () => {
    const wrapperTwo = mount(<ReviewEntry review={reviewTwo} />);
    const urlReview = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${reviewTwo.dp}.jpg`;
    const urlUser = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${userDp}.jpg`

    console.log(wrapperTwo.find('AvatarStyle'));

    expect(wrapperTwo.find('AvatarStyle').first()).toHaveProp('src', urlReview);
    expect(wrapperTwo.find('AvatarStyle').second()).toHaveProp('src', urlUser);
  });

});