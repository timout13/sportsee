import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
import Error404 from './pages/Error';
import './assets/css/index.css';
import Sidebar from "./components/sidebar/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <>
        <Router>
            <Header/>
            <main>
                <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/*" element={<Error404/>}></Route>
                    </Routes>
            </main>
        </Router>
    </>
    //</React.StrictMode>,
)

