const initialState = {
  memos: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'getMemos': {
      return {
        ...state,
        loading: action.subtype === 'loading',
        memos: action.subtype === 'success' ? action.payload : state.memos,
        error: action.subtype === 'error' ? action.error : null
      };
    }
    case 'createMemo': {
      return {
        ...state,
        loading: action.subtype === 'loading',
        memos: action.subtype === 'success' ? [ ...state.memos, action.payload ] : state.memos,
        error: action.subtype === 'error' ? action.error : null
      };
    }
    case 'deleteMemo': {
      return {
        ...state,
        memos: action.subtype === 'success'
          ? [ ...state.memos ].filter(m => m._id !== action.payload)
          : state.memos,
        error: action.subtype === 'error' ? action.error : null
      };
    }
    default:
      return state;
  }
};