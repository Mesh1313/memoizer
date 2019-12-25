import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export const BackButton = ({ onBack }) =>
  <TouchableOpacity
    onPress={onBack}>
    <Text>
      {'< Back'}
    </Text>
  </TouchableOpacity>