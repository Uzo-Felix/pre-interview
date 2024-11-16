import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Article, mockArticles } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { ArticleFilters } from './ArticleFilters';

const ITEMS_PER_PAGE = 10;

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  
  const observer = useRef<IntersectionObserver>();
  const lastArticleRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const categories = Array.from(new Set(mockArticles.map(article => article.category)));
  const authors = Array.from(new Set(mockArticles.map(article => article.author)));

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesAuthor = !selectedAuthor || article.author === selectedAuthor;
    return matchesSearch && matchesCategory && matchesAuthor;
  });

  useEffect(() => {
    setArticles(filteredArticles.slice(0, page * ITEMS_PER_PAGE));
  }, [page, searchTerm, selectedCategory, selectedAuthor]);

  return (
    <div className="container mx-auto p-4">
      <ArticleFilters
        categories={categories}
        authors={authors}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onAuthorChange={setSelectedAuthor}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            ref={index === articles.length - 1 ? lastArticleRef : null}
          >
            <ArticleCard
              article={article}
              onArticleClick={(id) => console.log('Navigate to article', id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
