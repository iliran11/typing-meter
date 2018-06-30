import React from 'react';
import ScoreBoard from './scoreBoard';
import { shallow } from 'enzyme';

const props = {
  wpm: 23,
  correctTypedWords: 20,
  disabled: true
};
const wrapper = shallow(<ScoreBoard {...props} />);

describe('`ScoreBoard`', () => {
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
