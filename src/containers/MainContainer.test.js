import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import MainContainer from './MainContainer';

describe('Main Container', () => {
  it('should have a View', () => {
    const store = createMockStore({});
    const testObject = shallow(<MainContainer />, { context: { store } }).dive();

    expect(testObject.find(View).length).toBe(1);
  });
});
