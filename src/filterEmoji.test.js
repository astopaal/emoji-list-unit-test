import React from 'react';
import { render, fireEvent, getByPlaceholderText, getAllByTestId } from '@testing-library/react';
import App from './App';

describe('Filtering emojis', () => {
  test('should correctly filter emojis when search text is entered', () => {
    // Arrange
    const searchText = 'happy';
    const maxResults = 20;

    // Act
    const { getByPlaceholderText, getAllByTestId } = render(<App />);
    fireEvent.change(getByPlaceholderText('Search emoji...'), { target: { value: searchText } });

    // Assert
    const emoji = getAllByTestId(searchText);
    expect(emoji).toBeInTheDocument();

  });
});
