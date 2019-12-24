import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import globalStyles from '../styles';

const Button = props => {
  const {
    title,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={globalStyles.submitButton}
      onPress={onPress}
    >
      <Text
        style={globalStyles.submitButtonTitle}
      >
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export {
  Button,
};