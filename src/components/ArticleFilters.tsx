import React from 'react';
import { Article } from '../data/articles';

interface ArticleFiltersProps {
  categories: string[];
  authors: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onAuthorChange: (value: string) => void;
}

export const ArticleFilters: React.FC<ArticleFiltersProps> = ({
  categories,
  authors,
  onSearchChange,
  onCategoryChange,
  onAuthorChange,
}) => {
  return (
    <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
      />
      
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => onAuthorChange(e.target.value)}
        className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
      >
        <option value="">All Authors</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};
