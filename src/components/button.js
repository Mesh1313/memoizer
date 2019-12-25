import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import globalStyles from '../styles';

export const Button = props => {
  const {
    title,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={globalStyles.submitButton}
      onPress={onPress}
    >
      <Text style={globalStyles.submitButtonTitle}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};