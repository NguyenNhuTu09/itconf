import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* Các route cho các trang khác sẽ được thêm vào đây */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;