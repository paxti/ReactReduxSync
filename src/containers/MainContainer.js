import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';


class MainContainer extends React.Component {

  componentDidMount() {
    this.props.doSomething();
  }

  render() {
    return ( 
      <View>
        <Text>Hello {this.props.test}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { test } = state;
  return {
    test
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doSomething: () => {
      dispatch({
        type: types.DO_SOMETHING
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);