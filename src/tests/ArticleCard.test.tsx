import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleCard } from '../components/Index';

const mockArticle = {
  id: 1,
  title: 'Test Article',
  description: 'Test Description',
  category: 'Test Category',
  date: '2023-01-01',
  author: 'Test Author',
  content: 'Test Content'
};

describe('ArticleCard', () => {
  it('renders article information correctly', () => {
    render(
      <BrowserRouter>
        <ArticleCard article={mockArticle} onArticleClick={function (id: any): void {
          throw new Error('Function not implemented.');
        } } />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });
});
