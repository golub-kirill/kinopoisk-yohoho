import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { BookmarksPage } from './pages/BookmarksPage/BookmarksPage';
import { InfoPage } from './pages/InfoPage/InfoPage';
import { PremieresPage } from './pages/PremieresPage/PremieresPage';

function App() {
    return (
        <StrictMode>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<PremieresPage />} />
                        <Route path="/:filmId" element={<InfoPage />} />
                        <Route path="/bookmarks" element={<BookmarksPage />} />
                    </Route>
                </Routes>
            </Router>
        </StrictMode>
    );
}

export default App;
