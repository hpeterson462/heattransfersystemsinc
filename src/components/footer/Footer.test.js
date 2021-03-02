import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
  afterEach(() => cleanup());

  it('renders Footer component', () => {
    const { asFragment } = render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
