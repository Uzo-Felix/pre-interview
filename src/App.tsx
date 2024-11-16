import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ArticleDetail, ArticleList, NotFound, ThemeToggle } from './components/Index';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <header className="p-4 border-b dark:border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Article App</h1>
              <ThemeToggle />
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
