import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

describe('Contact component', () => {
  afterEach(() => cleanup());

  it('renders Contact component', () => {
    const { asFragment } = render(<MemoryRouter><Contact /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
