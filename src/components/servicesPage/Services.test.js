import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from './Services';

describe('Services component', () => {
  afterEach(() => cleanup());

  it('renders Services component', () => {
    const { asFragment } = render(<MemoryRouter><Services /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
