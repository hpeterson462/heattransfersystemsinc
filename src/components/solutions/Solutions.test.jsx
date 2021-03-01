import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Solutions from './Solutions';

describe('Solutions component', () => {
  afterEach(() => cleanup());

  it('renders Solutions component', () => {
    const { asFragment } = render(<MemoryRouter><Solutions /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
