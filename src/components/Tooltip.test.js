import React from 'react';
import ToolTip from './Tooltip';
import { shallow } from 'enzyme';

const props = {
  result: 78
}
const wrapper = shallow(<ToolTip {...props} />);

describe('`ToolTip`',()=>{
  it ('renders properly',()=>{
    expect(wrapper).toMatchSnapshot();
  })
  it ()
})






