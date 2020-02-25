import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../../components/App/App';

describe('renders App', () => {
  
  it('should render title', () => {
    const { getByText } = render(<App />);
    const title = getByText('The Room of Light');
    expect(title).toBeInTheDocument();
  });

  it('should render dark room', () => {
    const { getByAltText } = render(<App />);
    expect(getByAltText('dark room')).toBeInTheDocument();
  });

  it('should render bright room after clicking button', async () => {
    const { getByAltText, getByRole } = render(<App />);
    fireEvent.click(getByRole('button'));
    expect(await getByAltText('light room')).toBeInTheDocument();
  });
});
