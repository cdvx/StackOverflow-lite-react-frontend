import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../src/AppRouter';

describe('<AppRouter />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null, <AppRouter />)).toMatchSnapshot();
  });
});
