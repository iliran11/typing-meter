import React from 'react';
import ScoreSection from './score-section';
import { shallow } from 'enzyme';

const props = {
  title: 'WPM',
  score: 20,
  disabled:true,
  specialScoreClass: 'special-class'
}
const wrapper = shallow(<ScoreSection {...props} />);

describe('`ScoreSection`',()=>{
  it ('renders properly',()=>{
    expect(wrapper).toMatchSnapshot();
  })
})