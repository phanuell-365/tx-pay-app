/// import vitest from 'vitest';

import { describe, it, expect } from 'vitest';
// import { render } from './test/utils';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  // it('displays the main heading', () => {
  //   render(<App />);
  //   // Update this based on your actual App component content
  //   const heading = screen.getByRole('heading', { level: 1 });
  //   expect(heading).toBeInTheDocument();
  // });
  //
  // it('displays Vite and React logos', () => {
  //   render(<App />);
  //   const viteLogo = screen.getByAltText('Vite logo');
  //   const reactLogo = screen.getByAltText('React logo');
  //
  //   expect(viteLogo).toBeInTheDocument();
  //   expect(reactLogo).toBeInTheDocument();
  // });
  //
  // it('has a working counter button', async () => {
  //   render(<App />);
  //
  //   const button = screen.getByRole('button', { name: /count is/i });
  //   expect(button).toBeInTheDocument();
  //
  //   // Check initial state
  //   expect(button).toHaveTextContent('count is 0');
  //
  //   // Click the button
  //   // await user.click(button)
  //   await userEvent.click(button);
  //
  //   // Check updated state
  //   expect(button).toHaveTextContent('count is 1');
  // });
});
