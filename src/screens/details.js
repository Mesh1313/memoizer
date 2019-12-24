import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import globalStyles from '../styles';
import moment from 'moment';
import * as utils from '../utils';

const getMemo = (state, id) => {
  return state.memos.memos.find(memo => memo._id === id);
};

const MemosDetailsScreen = props => {
  const memoId = props.navigation.getParam('id', null);
  const mapState = useCallback(
    state => getMemo(state, memoId),
    [memoId]
  );
  const memo = useMappedState(mapState);

  return <View style={globalStyles.container}>
    <View style={styles.heading}>
      <Text style={styles.title}>{memo.title.toUpperCase()}</Text>
      <Text style={styles.date}>{moment(memo.createdAt).format(utils.memoDisplayDateFormat)}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.contentText}>
        {memo.content}
      </Text>
    </View>
  </View>;
};

export default MemosDetailsScreen;

const styles = StyleSheet.create({
  title: {
    ...globalStyles.h1Font,
  },
  date: {
    fontSize: 15,
    color: '#bbb'
  },
  heading: {
    ...globalStyles.box,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    ...globalStyles.box,
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    color: '#000',
  }
});