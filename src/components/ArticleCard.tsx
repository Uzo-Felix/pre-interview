import React from 'react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onClick: (id: number) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      onClick={() => onClick(article.id)}
      className="p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {article.content.slice(0, 100)}...
      </p>
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{article.category}</span>
        <span>{article.author}</span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {new Date(article.date).toLocaleDateString()}
      </div>
    </div>
  );
};
