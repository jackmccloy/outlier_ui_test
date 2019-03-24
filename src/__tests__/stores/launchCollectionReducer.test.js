// @flow
import launchCollectionReducer from '../../stores/launchCollectionReducer';

import {
  REQUEST_LAUNCHES,
  RECEIVE_LAUNCHES,
  REQUEST_LAUNCHES_FAILURE,
} from '../../actions/constants';

import {
  getLaunchesRequest,
  getLaunchesFailure,
  receiveLaunches,
} from '../../actions/launches';

import { launchApiResponse } from '../../__mocks__/apiResponses';

/**
 * Test Reducer
 */
describe('launchCollection reducer', () => {
  it('should return current (or initial) state when called w/ no action', () => {
    expect(
      launchCollectionReducer({
        launches: [],
        error: '',
        fetching: false,
      }, {}),
    ).toEqual(
      {
        launches: [],
        error: '',
        fetching: false,
      },
    );

    // $FlowFixMe
    expect(launchCollectionReducer(undefined, {})).toEqual(
      {
        launches: [],
        error: '',
        fetching: false,        
      },
    );
  });

  it('should handle REQUEST_LAUNCHES', () => {
    expect(
      launchCollectionReducer(undefined, {
        type: REQUEST_LAUNCHES,
      }),
    ).toEqual({
      error: "",
      fetching: true,
      launches: [],
    });
  });

  it('should handle RECEIVE_LAUNCHES', () => {
    expect(
      launchCollectionReducer(undefined, {
        type: RECEIVE_LAUNCHES,
        payload: {
          launches: launchApiResponse,
        },
      }),
    ).toEqual(
      {
        error: '',
        fetching: false,
        launches: launchApiResponse,
      },
    );
  });

  it('should handle REQUEST_LAUNCHES_FAILURE', () => {
    expect(
      launchCollectionReducer(undefined, {
        type: REQUEST_LAUNCHES_FAILURE,
        payload: {
          errorMessage: 'This is an error message',
        },
      }),
    ).toEqual(
      {
        error: 'This is an error message',
        fetching: false,
        launches: [],
      },
    );
  });

});

/**
 * Test non-async action creators
 */
describe('receiveLaunches action creator', () => {
  it('should create an action as expected', () => {

    const expectedAction = {
      type: RECEIVE_LAUNCHES,
      payload: {
        launches: launchApiResponse,
      },
    };

    expect(receiveLaunches(launchApiResponse)).toEqual(expectedAction);
  });
});

describe('getLaunchesRequest action creator', () => {
  it('should create an action as expected', () => {
    const expectedAction = {
      type: REQUEST_LAUNCHES,
    };

    expect(getLaunchesRequest()).toEqual(expectedAction);
  });
});

describe('getLaunchesFailure action creator', () => {
  it('should create an action as expected', () => {
    const expectedAction = {
      type: REQUEST_LAUNCHES_FAILURE,
      payload: {
        errorMessage: 'This is an errorMessage',
      }
    };

    expect(getLaunchesFailure('This is an errorMessage')).toEqual(expectedAction);
  });
});

/**
 * Test async action creators
 */
