import React from 'react';
import styled from 'styled-components';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

const InputField = styled.input`
  &:read-only,
  &:disabled {
    background: lightgray;
  }
  &::after {
    content: "no"
  }
}
`;

test('mounts correctly with readOnly prop', () => {
  const wrapper = shallow(<InputField readOnly disabled />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.children()).toMatchSnapshot();
});
