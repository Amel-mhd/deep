import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import Reservation from './pages/Reservation';
import SpotDetail from './pages/SpotDetail';
import Intro from './scenes/Intro';

import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [selectedSpot, setSelectedSpot] = useState('merrouge');
  const [returnSection, setReturnSection] = useState('top');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [page, selectedSpot]);

  return (
    <>
      {page === 'home' && (
        <Home
  setPage={setPage}
  setSelectedSpot={setSelectedSpot}
  setReturnSection={setReturnSection}
/>
      )}

      {page === 'reservation' && (
        <Reservation setPage={setPage} />
      )}

      {page === 'spot' && (
       <SpotDetail
  spot={selectedSpot}
  setPage={setPage}
  returnSection={returnSection}
/>
      )}

      {showIntro && (
        <Intro onFinish={() => setShowIntro(false)} />
      )}
    </>
  );
}

export default App;