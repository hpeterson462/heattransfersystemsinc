import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';
import { getByText, toBeInTheDocument } from '@testing-library/jest-dom';

describe('Nav component', () => {
  afterEach(() => cleanup());

  it('renders Nav component', () => {
    const { asFragment } = render(<MemoryRouter><Nav /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders nav link', () => {
    render(<MemoryRouter><Nav /></MemoryRouter>);

    expect(screen.getByText(/Solutions/)).toBeInTheDocument();
  });
});
