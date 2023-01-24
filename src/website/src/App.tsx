/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/main/App/Header/index';
import Register from './components/main/App/Header/Modal/index';
import Top from './components/main/App/Top/top';
import Footer from './components/main/App/Footer';
import Home from './components/main/App/Home';
import Account from './components/main/App/Account';
import ViewGame from './components/main/App/ViewGames/ViewGame';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <div className={'app'}>
            <BrowserRouter>
                <Header name={'virgi'} profileImg={'doasdas'} />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/top'} element={<Top />} />
                    <Route path={'/account'} element={<Account />} />
                    <Route path={'/viewGame/:id'} element={<ViewGame />} />
                    <Route path={'/*'} element={<Navigate to={'/'} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
