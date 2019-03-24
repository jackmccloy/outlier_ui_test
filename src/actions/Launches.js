import { launchService } from '../services/SpaceXApi';

import {
  REQUEST_LAUNCHES,
  RECEIVE_LAUNCHES,
  REQUEST_LAUNCHES_FAILURE,
} from './constants';

/**
 * Synchronous actions
 */
const receiveLaunches = launches => ({
  type: RECEIVE_LAUNCHES,
  payload: {
    launches,
  }
});

const getLaunchesRequst = () => ({
  type: REQUEST_LAUNCHES,
});

const getLaunchesFailure = errorMessage => ({
  type: REQUEST_LAUNCHES_FAILURE,
  payload: {
    errorMessage,
  },
});

/**
 * Asynchronous actions
 */
export const getLaunchesThunk = (forceRequest = false) => (dispatch, getState) => {
  const { launchCollection } = getState();
  if (!forceRequest && !launchCollection.error && (launchCollection.fetching || launchCollection.launches.length)) {
    // if we're currently fetching the API or already have launches in the
    // store, we shouldn't re-fetch unless `forceRequest` is true
    return null;
  }
  dispatch(getLaunchesRequst());

  return launchService.get()
    .then(response => {
      dispatch(receiveLaunches(response.data));
     }).catch(error => {
      dispatch(getLaunchesFailure(error.message));      
    });
};
