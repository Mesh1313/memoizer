import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Button } from './button';
import globalStyles from '../styles';
import { ClosableBox } from './closableBox';

export const AddMemoModal = props => {
  const { onAdd, onClose } = props;
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  return (
    <ClosableBox onClose={onClose}>
      <View style={styles.inputHolder}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={globalStyles.textInput}
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputHolder}>
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={globalStyles.textInput}
          multiline={true}
          onChangeText={text => setContent(text)}
          value={content}
        />
      </View>
      <Button
        title='Add'
        onPress={() => {
          onAdd({
            title,
            content
          });
        }}
      />
    </ClosableBox>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  label: {
    ...globalStyles.mainText,
    marginBottom: 10,
  },
  inputHolder: {
    marginBottom: 10,
  },
  closeHolder: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});