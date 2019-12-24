import { getRequest, postRequest, deleteRequest } from '../utils';

const apiSubpath = 'memos/';

const getMemos = async (dispatch) => {
  const actionType = 'getMemos';

  try {
    dispatch({
      type: actionType,
      subtype: 'loading',
    });

    const resp = await getRequest({ path: apiSubpath });

    if (!resp.data) {
      return dispatch({
        type: actionType,
        subtype: 'error',
        error: 'No memos found',
      });
    }

    dispatch({
      type: actionType,
      subtype: 'success',
      payload: resp.data,
    });
  } catch (e) {
    dispatch({
      type: actionType,
      subtype: 'error',
      error: e,
    });
  }
};

const createMemo = async (dispatch, memoData) => {
  const actionType = 'createMemo';

  try {
    dispatch({
      type: actionType,
      subtype: 'loading',
    });

    const resp = await postRequest({ path: apiSubpath, body: memoData });

    if (!resp.data) {
      return dispatch({
        type: actionType,
        subtype: 'error',
        error: 'Add memo failed',
      });
    }

    dispatch({
      type: actionType,
      subtype: 'success',
      payload: resp.data,
    });
  } catch(e) {
    dispatch({
      type: actionType,
      subtype: 'error',
      error: e,
    });
  }
};

const deleteMemo = async (dispatch, memoId) => {
  const actionType = 'deleteMemo';

  try {
    dispatch({
      type: actionType,
      subtype: 'loading',
    });

    const resp = await deleteRequest({ path: `${apiSubpath}${memoId}` });

    if (!resp.id) {
      return dispatch({
        type: actionType,
        subtype: 'error',
        error: 'Delete memo failed',
      });
    }

    dispatch({
      type: actionType,
      subtype: 'success',
      payload: memoId,
    });
  } catch(e) {
    dispatch({
      type: actionType,
      subtype: 'error',
      error: e,
    });
  }
};

export {
  getMemos,
  createMemo,
  deleteMemo,
};