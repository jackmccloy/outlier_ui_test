// @flow
import rocketCollectionReducer from '../../stores/rocketCollectionReducer';

import {
  REQUEST_ROCKETS,
  RECEIVE_ROCKETS,
  REQUEST_ROCKETS_FAILURE,
} from '../../actions/constants';

import {
  getRocketsRequest,
  getRocketsFailure,
  receiveRockets,
} from '../../actions/rockets';

import { rocketApiResponse } from '../../__mocks__/apiResponses';

/**
 * Test Reducer
 */
describe('rocketCollection reducer', () => {
  it('should return current (or initial) state when called w/ no action', () => {
    expect(
      rocketCollectionReducer({
        rockets: [],
        error: '',
        fetching: false,
      }, {}),
    ).toEqual(
      {
        rockets: [],
        error: '',
        fetching: false,
      },
    );

    // $FlowFixMe
    expect(rocketCollectionReducer(undefined, {})).toEqual(
      {
        rockets: [],
        error: '',
        fetching: false,        
      },
    );
  });

  it('should handle REQUEST_ROCKETS', () => {
    expect(
      rocketCollectionReducer(undefined, {
        type: REQUEST_ROCKETS,
      }),
    ).toEqual({
      error: "",
      fetching: true,
      rockets: [],
    });
  });

  it('should handle RECEIVE_ROCKETS', () => {
    expect(
      rocketCollectionReducer(undefined, {
        type: RECEIVE_ROCKETS,
        payload: {
          rockets: rocketApiResponse,
        },
      }),
    ).toEqual(
      {
        error: '',
        fetching: false,
        rockets: rocketApiResponse,
      },
    );
  });

  it('should handle REQUEST_ROCKETS_FAILURE', () => {
    expect(
      rocketCollectionReducer(undefined, {
        type: REQUEST_ROCKETS_FAILURE,
        payload: {
          errorMessage: 'This is an error message',
        },
      }),
    ).toEqual(
      {
        error: 'This is an error message',
        fetching: false,
        rockets: [],
      },
    );
  });

});

/**
 * Test non-async action creators
 */
describe('receiveRockets action creator', () => {
  it('should create an action as expected', () => {

    const expectedAction = {
      type: RECEIVE_ROCKETS,
      payload: {
        rockets: rocketApiResponse,
      },
    };

    expect(receiveRockets(rocketApiResponse)).toEqual(expectedAction);
  });
});

describe('getRocketsRequest action creator', () => {
  it('should create an action as expected', () => {
    const expectedAction = {
      type: REQUEST_ROCKETS,
    };

    expect(getRocketsRequest()).toEqual(expectedAction);
  });
});

describe('getRocketsFailure action creator', () => {
  it('should create an action as expected', () => {
    const expectedAction = {
      type: REQUEST_ROCKETS_FAILURE,
      payload: {
        errorMessage: 'This is an errorMessage',
      }
    };

    expect(getRocketsFailure('This is an errorMessage')).toEqual(expectedAction);
  });
});

/**
 * Test async action creators
 */
