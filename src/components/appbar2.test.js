import React from 'react';
import AppBar from './appbar2';
import { shallow } from 'enzyme';

function AppBarFactory(walkThroughIconStatus) {
  return shallow(<AppBar walkThroughIconStatus={walkThroughIconStatus} />);
}
function getInfoIconStyle(walkThroughIconStatus) {
  const wrapper = AppBarFactory(walkThroughIconStatus);
  return wrapper.find('.walkthrough').prop('style');
}
describe('`AppBar`', () => {
  it('renders properly', () => {
    const wrapper = AppBarFactory();
    expect(wrapper).toMatchSnapshot();
  });
  describe(`help icon`, () => {
    it('is greyed out when icon status is false', () => {
      const informationIconStyle = getInfoIconStyle(false);
      expect(informationIconStyle).toHaveProperty('opacity', 0.5);
    });
    it('is not greyed when icon status is true', () => {
      const informationIconStyle = getInfoIconStyle(true);
      expect(informationIconStyle).toEqual({});
    });
  });
});
