import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentTabs from './components/ContentTabs';
import ChapterList from './components/ChapterList';
import ContentDetails from './components/ContentDetails';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">
                <Header />
                <ContentTabs />
                <div className="main-content">
                    <ChapterList />
                    <ContentDetails />
                </div>
            </div>
        </div>
    );
};

export default App;
