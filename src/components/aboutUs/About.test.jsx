import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  afterEach(() => cleanup());

  it('renders AboutUs component', () => {
    const { asFragment } = render(<MemoryRouter><AboutUs /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
