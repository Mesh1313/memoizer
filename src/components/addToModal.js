import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import { Button } from './button';
import { ClosableBox } from './closableBox';
import globalStyles from '../styles';

export const AddToModal = ({ content, onClose, onAddToMemo }) => {
  const mapState = useCallback(
    state => state.memos,
    []
  );
  const { loading, memos } = useMappedState(mapState);

  return <ClosableBox onClose={onClose}>
    <Text>Add Content To Memo</Text>
    <Text>{content}</Text>
    {/* <Image 
      style={{ width: 100, height: 100 }}
      resizeMode="contain"
      source={{ uri: content }}/> */}

    <Text>Select Memo: </Text>
    <View>
    {
      !loading
      && memos.length
      && memos.reverse().map(memo =>
        <TouchableOpacity
          key={`add-to-memo-${memo._id}`}
          onPress={() => onAddToMemo({ memo, content })}>
          <Text style={globalStyles.mainText}>{memo.title}</Text>
        </TouchableOpacity>
      )
    }
    </View>
  </ClosableBox>;
}

const styles = StyleSheet.create({
  
});