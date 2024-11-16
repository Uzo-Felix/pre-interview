import React, { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
    IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mockArticles, Article } from '../data/articles';
import { useTheme } from '../contexts/ThemeContext';

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [page, setPage] = useState(1);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        setArticles(mockArticles);
        setDisplayedArticles(mockArticles.slice(0, 10));
    }, []);

    const loadMore = () => {
        const next = page + 1;
        const start = (next - 1) * 10;
        const end = start + 10;
        setDisplayedArticles([...displayedArticles, ...articles.slice(start, end)]);
        setPage(next);
    };

    const filterArticles = (search: string, cat: string) => {
        let filtered = mockArticles;
        if (search) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (cat !== 'all') {
            filtered = filtered.filter(article => article.category === cat);
        }
        setArticles(filtered);
        setDisplayedArticles(filtered.slice(0, 10));
        setPage(1);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4">Статьи</Typography>
                <IconButton onClick={toggleTheme}>
                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                    label="Поиск"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        filterArticles(e.target.value, category);
                    }}
                />
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel>Категория</InputLabel>
                    <Select
                        value={category}
                        label="Категория"
                        onChange={(e) => {
                            setCategory(e.target.value);
                            filterArticles(searchTerm, e.target.value);
                        }}
                    >
                        <MenuItem value="all">Все</MenuItem>
                        <MenuItem value="Технологии">Технологии</MenuItem>
                        <MenuItem value="Наука">Наука</MenuItem>
                        <MenuItem value="Здоровье">Здоровье</MenuItem>
                        <MenuItem value="Бизнес">Бизнес</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <InfiniteScroll
                dataLength={displayedArticles.length}
                next={loadMore}
                hasMore={displayedArticles.length < articles.length}
                loader={<Typography>Загрузка...</Typography>}
            >
                {displayedArticles.map((article) => (
                    <Card key={article.id} sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{article.title}</Typography>
                            <Typography color="textSecondary">
                                {article.category} | {article.author} | {new Date(article.date).toLocaleDateString('ru-RU')}
                            </Typography>
                            <Typography variant="body2">{article.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </InfiniteScroll>
        </Box>
    );
};

export default ArticleList;
