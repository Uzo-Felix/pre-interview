import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ArticleList />
    </ThemeProvider>
  );
}

export default App;
