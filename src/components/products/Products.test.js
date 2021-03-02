import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';

describe('Products component', () => {
  afterEach(() => cleanup());

  it('renders Products component', () => {
    const { asFragment } = render(<MemoryRouter><Products /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
