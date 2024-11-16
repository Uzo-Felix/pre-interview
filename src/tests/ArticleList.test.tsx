import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleList } from '../components/Index';

describe('ArticleList', () => {
  it('renders filters and article cards', () => {
    render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Search articles...')).toBeInTheDocument();
    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('All Authors')).toBeInTheDocument();
  });

  it('filters articles based on search input', () => {
    render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search articles...');
    fireEvent.change(searchInput, { target: { value: 'Статья 1' } });
    
    expect(screen.getByText('Статья 1')).toBeInTheDocument();
  });
});
