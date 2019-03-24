import React from 'react';

import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

import {
  MemoryRouter,
} from 'react-router';

import { LaunchView } from '../../views/Launch';

import { launchApiResponse } from '../../__mocks__/apiResponses';

describe('<LaunchesView />', () => {
  let getLaunches;

  beforeEach(() => {
    getLaunches = jest.fn();

    mount(
      <LaunchView
        getLaunches={getLaunches}
        launchCollection={{
          launches: [],
          fetching: false,
          error: '',
        }}
        match={{
          params: {
            flight_number: '1',
          }
        }}
      />,
    );
  });

  it('calls getLaunches on mount', () => {
    expect(getLaunches.mock.calls.length).toBe(1);
  });

  it('renders correctly while fetching', () => {
    const tree = renderer
      .create(
        <LaunchView
          getLaunches={jest.fn()}
          launchCollection={{
            launches: [],
            fetching: true,
            error: '',
          }}
          match={{
            params: {
              flight_number: '1',
            }
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly after fetch error', () => {
    const tree = renderer
      .create(
        <LaunchView
          getLaunches={jest.fn()}
          launchCollection={{
            launches: [],
            fetching: false,
            error: 'An error occured',
          }}
          match={{
            params: {
              flight_number: '1',
            }
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <LaunchView
            getLaunches={jest.fn()}
            launchCollection={{
              launches: launchApiResponse,
              fetching: false,
              error: '',
            }}
            match={{
              params: {
                flight_number: '1',
              }
            }}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
