import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockArticles } from '../data/articles';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const article = mockArticles.find(a => a.id === Number(id));

  if (!article) {
    return <div className="container mx-auto p-4">Article not found</div>;
  }

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        ← Back
      </button>
      
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-4">
          <span>{article.author}</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
        
        <div className="mb-4">
          <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
            {article.category}
          </span>
        </div>

        <p className="whitespace-pre-wrap">{article.content}</p>

        <button
          onClick={handleShare}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Share Article
        </button>
      </article>

      {showCopyNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};
