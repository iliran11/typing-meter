import React from 'react';
import CompletionModal from './completionModal';
import { shallow } from 'enzyme';

const props = {
  correctTypedWords: 78,
  wpmScore: 10,
  onRestart: jest.fn()
}
const wrapper = shallow(<CompletionModal {...props} />);

describe('`CompletionModal`',()=>{
  it ('renders properly',()=>{
    expect(wrapper).toMatchSnapshot();
  })
})