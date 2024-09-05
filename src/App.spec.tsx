import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('app load test', () => {
  it('should load the app', () => {
    render(<App />);
    const appText = screen.getByText('its working...');
    expect(appText).toBeInTheDocument();
  });
});
