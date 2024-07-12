import React, { useState } from 'react';
import './App.scss';
import Head from './components/head/Head';
import Body from './components/body/Body';
import Catalog from './components/body/secondary/catalog/Catalog';
import Genres from './components/body/secondary/genres/Genres';
import Preferences from './components/body/secondary/preferences/Preferences';
import Top from './components/body/secondary/top/Top';
import WholeList from './components/body/wholeList/WholeList';
import Main from './components/main/Main';
import Request from './components/request/Request';
import Authorization from './components/authorization/Authorization';
import Mark from './components/mark/Mark';
import Bell from './components/bell/Bell';
import { AppProvider } from './AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AppProvider>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Head />
                    <Routes>
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/genres" element={<Genres />} />
                        <Route path="/preferences" element={<Preferences />} />
                        <Route path="/top" element={<Top />} />
                        <Route path="/wholeList" element={<WholeList />} />
                        <Route path="/main" element={<Main />} />
                        <Route path='/request' element={<Request />} />
                        <Route path="/authorization" element={<Authorization />} />
                        <Route path="/mark" element={<Mark />} />
                        <Route path="/bell" element={<Bell />} />
                        <Route path="/" element={<Body />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
