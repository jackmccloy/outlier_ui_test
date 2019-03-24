import LaunchService from '../services/LaunchService';

import {
  REQUEST_LAUNCHES,
  RECEIVE_LAUNCHES,
} from './constants';

export const requestLaunches = () => ({
  type: REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
