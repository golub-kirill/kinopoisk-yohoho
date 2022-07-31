import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { InfoPage } from './pages/InfoPage/InfoPage';
import { PlayerPage } from './pages/PlayerPage/PlayerPage';
import { PremieresPage } from './pages/PremieresPage/PremieresPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<PremieresPage />} />
                    <Route path="/:filmId" element={<InfoPage />} />
                </Route>
                <Route path="/player" element={<PlayerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
