import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  useDispatch,
  useMappedState
} from 'redux-react-hook';
import globalStyles from '../styles';
import { Button } from '../components';
import { MemoTile } from '../components/memoTile';
import { AddMemoForm } from '../components/addMemoForm';
import { PromptModal } from '../components/promptModal';
import * as memosActions from '../actions/memos';
import moment from 'moment';
import * as utils from '../utils';

const createMemo = (dispatch, memoData) => {
  memosActions.createMemo(dispatch, memoData);
};

const getMemosByDate = () => {
  const mapState = useCallback(
    state => state.memos,
    []
  );
  const { memos } = useMappedState(mapState);
  let dateGroupsMap = {};

  memos
  .forEach(memo => {
    const dateStr = moment(memo.createdAt).format(utils.memoDisplayDateFormat);
    const dateFields = Object.keys(dateGroupsMap);

    if (dateFields.indexOf(dateStr) == -1) dateGroupsMap[dateStr] = [];
    dateGroupsMap[dateStr].unshift(memo);
  });

  return {
    groupKeys: Object.keys(dateGroupsMap).reverse(),
    dateGroupsMap,
  };
};

const onDeleteMemo = (dispatch, memoToDelete, onSuccessCallback) => {  
  memosActions.deleteMemo(dispatch, memoToDelete._id);
  onSuccessCallback();
};

const MemosScreen = props => {
  const { navigation } = props;
  const [ showAdd, setShowAdd ] = useState(false);
  const [ showDeleteModal, setShowDeleteModal ] = useState(false);
  const [ memoToDelete, setMemoToDelete ] = useState(null);
  const dispatch = useDispatch();
  const mapState = useCallback(
    state => state.memos,
    []
  );
  const { loading, memos } = useMappedState(mapState);
  const onShowDeleteModal = (memo) => {
    setShowDeleteModal(true);
    setMemoToDelete(memo);
  };
  const onDeleteMemoSuccess = () => {
    setShowDeleteModal(false);
    setMemoToDelete(null);
  }
  const memosGroupDatesMap = getMemosByDate();

  useEffect(() => {
    memosActions.getMemos(dispatch);
  }, []);

  useMemo(() => getMemosByDate, [memos]);

  return (
    <View style={globalStyles.container}>
      <View style={{ marginBottom: 10 }}>
        <Button
          title='Add memo'
          onPress={() => {
            setShowAdd(true);
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
      {
        !loading
        && memos.length
        ? <ScrollView>
          {
            memosGroupDatesMap.groupKeys.map(groupKey => (
              <View
              style={[globalStyles.box, { marginBottom: 10 }]}
              key={`memos-date-group-${groupKey}`}>
                <Text style={styles.groupTitle}>
                  {groupKey}
                </Text>
                <View style={styles.memosList}>
                {
                  memosGroupDatesMap
                    .dateGroupsMap[groupKey]
                    .map(memo => (
                      <MemoTile
                        key={`memo-${memo._id}`}
                        memo={memo}
                        onPress={() => navigation.navigate('Details', { id: memo._id })}
                        onLongPressCallback={onShowDeleteModal}/>
                      )
                    )
                }
                </View>
              </View>
            ))
          }
          </ScrollView>
          : <View>
            <ActivityIndicator
            size='large'
            color="#000"/>
          </View>
      }
      </View>
      {
        showAdd
        && <View style={styles.modalContainer}>
          <AddMemoForm
            onAdd={memoData => {
              createMemo(dispatch, memoData);
              setShowAdd(false);
            }}
            onCloseForm={() => setShowAdd(false)}
          />
        </View>
      }
      {
        showDeleteModal
        && memoToDelete
        && <View style={styles.modalContainer}>
          <PromptModal
          title={`Do you want to delete memo: ${memoToDelete._id}`}
          onOkPress={() => onDeleteMemo(dispatch, memoToDelete, onDeleteMemoSuccess)}
          onCancelPress={() => {
            setShowDeleteModal(false);
            setMemoToDelete(null);
          }}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  memosList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  groupTitle: {
    marginBottom: 5,
  },
  modalContainer: {
    ...globalStyles.absoluteCover,
    justifyContent: 'center',
  }
});

export default MemosScreen;
  