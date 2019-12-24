import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const MemoTile = props => {
  const { memo, onPress, onLongPressCallback } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      delayLongPress={200}
      onLongPress={() => onLongPressCallback(memo)}>
      <View style={styles.tile}>
        <Text>
          {memo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export { MemoTile };

const styles = StyleSheet.create({
  tile: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
  }
});