import {
  REQUEST_LAUNCHES,
  RECEIVE_LAUNCHES,
} from '../actions/constants';

const initialState = {
  launches: [],
  fetching: false
};

const actionHandlers = {
  [REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
