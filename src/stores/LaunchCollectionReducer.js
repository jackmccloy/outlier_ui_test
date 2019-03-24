import {
  RECEIVE_LAUNCHES,
  REQUEST_LAUNCHES,
  REQUEST_LAUNCHES_FAILURE,
} from '../actions/constants';

const initialState = {
  launches: [],
  error: '',
  fetching: false
};

const actionHandlers = {
  [REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    error: '',
    fetching: true,
  }),
  [RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    error: '',
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [REQUEST_LAUNCHES_FAILURE]: ({ state, action }) => ({
    ...state,
    error: action.payload.errorMessage,
    fetching: false,
  }),
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
