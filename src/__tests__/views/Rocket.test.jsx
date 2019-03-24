import React from 'react';

import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

import {
  MemoryRouter,
} from 'react-router';

import { RocketView } from '../../views/Rocket';

import { rocketApiResponse } from '../../__mocks__/apiResponses';

describe('<RocketView />', () => {
  let getRockets;

  beforeEach(() => {
    getRockets = jest.fn();

    mount(
      <RocketView
        getRockets={getRockets}
        rocketCollection={{
          rockets: [],
          fetching: false,
          error: '',
        }}
        match={{
          params: {
            rocket_id: 'falcon1',
          }
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
        <RocketView
          getRockets={jest.fn()}
          rocketCollection={{
            rockets: [],
            fetching: true,
            error: '',
          }}
          match={{
            params: {
              rocket_id: 'falcon1',
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
        <RocketView
          getRockets={jest.fn()}
          rocketCollection={{
            rockets: [],
            fetching: false,
            error: 'An error occured',
          }}
          match={{
            params: {
              rocket_id: 'falcon1',
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
          <RocketView
            getRockets={jest.fn()}
            rocketCollection={{
              rockets: rocketApiResponse,
              fetching: false,
              error: '',
            }}
            match={{
              params: {
                rocket_id: 'falcon1',
              }
            }}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
