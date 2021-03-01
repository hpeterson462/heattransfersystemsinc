import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Router, Link, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from './App';

describe('App', () => {
  afterEach(() => cleanup());

  it('renders App component', () => {
    const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('links to correct page', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const pathResult = render(<Router history={history}>
      <Link to={{ path: '/' }}>Home</Link>
    </Router>);

    fireEvent.click(pathResult.getByText('Home'));

    expect(history.location.path).toBe('/');
  });
});
