import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const TestComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

describe('ThemeContext', () => {
  it('provides theme context and toggles theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Light Mode');
    
    fireEvent.click(button);
    expect(button).toHaveTextContent('Dark Mode');
  });
});
