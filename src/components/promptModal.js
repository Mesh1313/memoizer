import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from '../components';

export const PromptModal = props => {
  const {
    title,
    okButtonTitle,
    cancelButtonTitle,
    onOkPress,
    onCancelPress,
  } = props;

  return <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <View style={styles.btnHolder}>
      {
        onOkPress
        &&  <View style={styles.collLeft}>
          <Button
            title={okButtonTitle || 'Ok'}
            onPress={onOkPress}/>
        </View>
      }
      {
        onCancelPress
        && <View style={styles.collRight}>
          <Button
            title={cancelButtonTitle || 'Cancel'}
            onPress={onCancelPress}/>
        </View>
      }
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
    fontSize: 18,
  },
  btnHolder: {
    flexDirection: 'row',
  },
  collLeft: {
    width: '50%',
    paddingRight: 5,
  },
  collRight: {
    width: '50%',
    paddingLeft: 5,
  },
});