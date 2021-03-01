import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  afterEach(() => cleanup());

  it('renders Home component', () => {
    const { asFragment } = render(<MemoryRouter><Home /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Home logo and title', () => {
    const { getByTestId } = render(<MemoryRouter><Home /></MemoryRouter>);

    expect(getByTestId('title').textContent).toBe('Heat Transfer Systems');
  })
});
