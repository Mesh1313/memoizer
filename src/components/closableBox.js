import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import globalStyles from '../styles';

export const ClosableBox = ({ children, onClose }) => {
  return <View style={styles.container}>
    <View style={styles.closeHolder}>
      <TouchableOpacity
        onPress={onClose}
      >
        <Text style={globalStyles.mainText}>Close</Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
      {children}
    </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  closeHolder: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});