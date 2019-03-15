import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.doSomething();
  }

  render() {
    const { test } = this.props;
    return (
      <View>
        <Text>Hello {test}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { test } = state;
  return {
    test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSomething: () => {
      dispatch({
        type: types.DO_SOMETHING
      });
    }
  };
};

MainContainer.propTypes = {
  test: PropTypes.string,
  doSomething: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
