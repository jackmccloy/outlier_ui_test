import { rocketService } from '../services/SpaceXApi';

import {
  REQUEST_ROCKETS,
  RECEIVE_ROCKETS,
  REQUEST_ROCKETS_FAILURE,
} from './constants';

/**
 * Synchronous actions
 */
const receiveRockets = rockets => ({
  type: RECEIVE_ROCKETS,
  payload: {
    rockets,
  }
});

const getRocketsRequst = () => ({
  type: REQUEST_ROCKETS,
});

const getRocketsFailure = errorMessage => ({
  type: REQUEST_ROCKETS_FAILURE,
  payload: {
    errorMessage,
  },
});

/**
 * Asynchronous actions
 */
export const getRocketsThunk = (forceRequest = false) => (dispatch, getState) => {
  const { rocketCollection } = getState();
  if (!forceRequest && !rocketCollection.error && (rocketCollection.fetching || rocketCollection.rockets.length)) {
    // if we're currently fetching the API or already have rockets in the
    // store, we shouldn't re-fetch unless `forceRequest` is true
    return null;
  }
  dispatch(getRocketsRequst());

  return rocketService.get()
    .then(response => {
      dispatch(receiveRockets(response.data));
     }).catch(error => {
      dispatch(getRocketsFailure(error.message));      
    });
};
