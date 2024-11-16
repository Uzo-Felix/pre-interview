import { useState, useEffect } from 'react';
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
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Статьи</h1>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </button>
            </div>

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        filterArticles(e.target.value, category);
                    }}
                    className="px-4 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-300 dark:bg-gray-800 dark:border-gray-700"
                />

                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        filterArticles(searchTerm, e.target.value);
                    }}
                    className="px-4 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-300 dark:bg-gray-800 dark:border-gray-700"
                >
                    <option value="all">Все</option>
                    <option value="Технологии">Технологии</option>
                    <option value="Наука">Наука</option>
                    <option value="Здоровье">Здоровье</option>
                    <option value="Бизнес">Бизнес</option>
                </select>
            </div>

            <InfiniteScroll
                dataLength={displayedArticles.length}
                next={loadMore}
                hasMore={displayedArticles.length < articles.length}
                loader={<p className="text-center py-4">Загрузка...</p>}
            >
                <div className="space-y-4">
                    {displayedArticles.map((article) => (
                        <div
                            key={article.id}
                            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-orange-300">{article.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {article.category} | {article.author} | {new Date(article.date).toLocaleDateString('ru-RU')}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default ArticleList;
