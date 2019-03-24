import React from 'react';

import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

import {
  MemoryRouter,
} from 'react-router';

import { LaunchesView } from '../../views/Launches';

import { launchApiResponse } from '../../__mocks__/apiResponses';

describe('<LaunchesView />', () => {
  let getLaunches;

  beforeEach(() => {
    getLaunches = jest.fn();

    mount(
      <LaunchesView
        getLaunches={getLaunches}
        launchCollection={{
          launches: [],
          fetching: false,
          error: '',
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
        <LaunchesView
          getLaunches={jest.fn()}
          launchCollection={{
            launches: [],
            fetching: true,
            error: '',
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly after fetch error', () => {
    const tree = renderer
      .create(
        <LaunchesView
          getLaunches={jest.fn()}
          launchCollection={{
            launches: [],
            fetching: false,
            error: 'An error occured',
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
          <LaunchesView
            getLaunches={jest.fn()}
            launchCollection={{
              launches: launchApiResponse,
              fetching: false,
              error: '',
            }}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
