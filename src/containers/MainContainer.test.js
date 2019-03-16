import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import MainContainer from './MainContainer';

describe('Main Container', () => {
  let store;
  let testObject;

  beforeEach(() => {
    const mockStore = configureStore([]);
    store = mockStore({});
    testObject = shallow(<MainContainer />, { context: { store } }).dive();
  });

  it('should have a View', () => {
    expect(testObject.find(View).length).toBe(1);
  });

  it('should have Flat list', () => {
    expect(testObject.find(FlatList).length).toBe(1);
  });

  describe('Flat List', () => {
    it('should have 5 items', () => {
      expect(testObject.find(FlatList).props().data.length).toBe(5);
    });

    it('should have renderItem props', () => {
      expect(testObject.find(FlatList).props().renderItem).not.toBeUndefined();
    });

    it('should use Text as renderItem', () => {
      expect(
        testObject
          .find(FlatList)
          .props()
          .renderItem({})
      ).toEqual(<Text />);
    });
  });
});
