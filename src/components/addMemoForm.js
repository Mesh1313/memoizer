import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from '../components';

const AddMemoForm = props => {
  const { onAdd, onCloseForm } = props;
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.closeHolder}>
        <TouchableOpacity
          onPress={onCloseForm}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputHolder}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputHolder}>
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={styles.textInput}
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
    </View>
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
    marginBottom: 10,
  },
  inputHolder: {
    marginBottom: 10,
  },
  closeHolder: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#bfbfbf',
  },
});

export { AddMemoForm };