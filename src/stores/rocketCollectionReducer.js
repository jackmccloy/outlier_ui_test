import {
  RECEIVE_ROCKETS,
  REQUEST_ROCKETS,
  REQUEST_ROCKETS_FAILURE,
} from '../actions/constants';

const initialState = {
  rockets: [],
  error: '',
  fetching: false
};

const actionHandlers = {
  [REQUEST_ROCKETS]: ({ state }) => ({
    ...state,
    error: '',
    fetching: true,
  }),
  [RECEIVE_ROCKETS]: ({ state, action }) => ({
    ...state,
    error: '',
    fetching: false,
    rockets: [...state.rockets, ...action.payload.rockets]
  }),
  [REQUEST_ROCKETS_FAILURE]: ({ state, action }) => ({
    ...state,
    error: action.payload.errorMessage,
    fetching: false,
  }),
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
