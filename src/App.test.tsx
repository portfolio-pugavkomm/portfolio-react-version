import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from '../src/App'; // Adjust the path to your App component

describe('App should be created', () => {
  it('should render the main application title or content', () => {
    render(<App />);
  });
});
