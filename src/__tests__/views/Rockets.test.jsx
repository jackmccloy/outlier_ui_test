import React from 'react';

import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

import {
  MemoryRouter,
} from 'react-router';

import { RocketsView } from '../../views/Rockets';

import { rocketApiResponse } from '../../__mocks__/apiResponses';

describe('<RocketsView />', () => {
  let getRockets;

  beforeEach(() => {
    getRockets = jest.fn();

    mount(
      <RocketsView
        getRockets={getRockets}
        rocketCollection={{
          rockets: [],
          fetching: false,
          error: '',
        }}
      />,
    );
  });

  it('calls getRockets on mount', () => {
    expect(getRockets.mock.calls.length).toBe(1);
  });

  it('renders correctly while fetching', () => {
    const tree = renderer
      .create(
        <RocketsView
          getRockets={jest.fn()}
          rocketCollection={{
            rockets: [],
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
        <RocketsView
          getRockets={jest.fn()}
          rocketCollection={{
            rockets: [],
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
          <RocketsView
            getRockets={jest.fn()}
            rocketCollection={{
              rockets: rocketApiResponse,
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
