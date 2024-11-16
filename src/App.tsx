import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { ArticleList } from './components/ArticleList';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4 border-b dark:border-gray-700">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Article App</h1>
            <ThemeToggle />
          </div>
        </header>
        <main>
          <ArticleList />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
