import { StrictMode } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';

import './App.css';
import { BookmarksPage } from './pages/BookmarksPage/BookmarksPage';
import { InfoPage } from './pages/InfoPage/InfoPage';
import { PremieresPage } from './pages/PremieresPage/PremieresPage';

function App() {
    return (
        <StrictMode>
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<PremieresPage />} />
                        <Route path="/:filmId" element={<InfoPage />} />
                        <Route path="/bookmarks" element={<BookmarksPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </HashRouter>
        </StrictMode>
    );
}

export default App;
