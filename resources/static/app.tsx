import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
