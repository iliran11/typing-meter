import React from 'react';
import ResultComparison from './ResultComparison';
import { shallow } from 'enzyme';

const props = {
  result: {
    percentile: 10
  }
};
describe('`ResultComparison`', () => {
  it('renders properly', () => {
    const wrapper = shallow(<ResultComparison {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
