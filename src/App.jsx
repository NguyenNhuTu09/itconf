import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventPage';
import DetailsEventsPage from './Pages/DetailsEventsPage/DetailsEventsPage';
import PaymentEventsPage from './Pages/PaymentEventsPage/PaymentEventsPage';
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
          <Route path="/events/:id" element={<DetailsEventsPage />} />
          <Route path="/payment" element={<PaymentEventsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;