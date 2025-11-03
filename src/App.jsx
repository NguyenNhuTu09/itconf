import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sponsors from './components/Sponsors/Sponsors';
import Offer from './components/Offer/Offer'; 
import Events from './components/Events/Events';
import Stats from './components/Stats/Stats';
import Speakers from './components/Speakers/Speakers';
import MainEvents from './components/MainEvents/MainEvents';
import Topics from './components/Topics/Topics';
import Tickets from './components/Tickets/Tickets';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Offer />
        <Events />
        <Stats />
        <Speakers />
        <MainEvents />\
        <Topics />
        <Tickets />
        <Testimonials />
      </main>
      {/* Bạn có thể thêm Footer ở đây nếu cần */}
      <Footer />
    </div>
  );
}

export default App;