import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Translate from './Translate';

describe('Translate component', () => {
  afterEach(() => cleanup());

  it('renders Translate component', () => {
    const { asFragment } = render(<MemoryRouter><Translate /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
