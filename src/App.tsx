import React, { useState } from 'react';

const UnityJournal = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const CORRECT_PIN = "1234"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsLocked(false);
      setError(false);
    } else {
      setError(true);
      setPin("");
    }
  };

  const pages = [
    { title: "Benvenuto", content: "Questa è la tua rivista privata UnityJournal." },
    { title: "Obiettivi 2026", content: "Organizzare la cartella AppLAVORO." },
    { title: "Note Private", content: "Il tuo PIN di accesso è sicuro." }
  ];

  if (isLocked) {
    return (
      <div style={{ height: '100vh', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔒</div>
        <h2>Area Riservata</h2>
        <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Inserisci PIN" style={{ padding: '12px', borderRadius: '8px', border: 'none', marginBottom: '10px', textAlign: 'center', fontSize: '18px' }} />
          {error && <p style={{ color: '#ff4d4d' }}>PIN Errato!</p>}
          <br />
          <button type="submit" style={{ padding: '10px 25px', borderRadius: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none', fontWeight: 'bold' }}>SBLOCCA</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', backgroundColor: '#1a1a1a', color: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#007bff' }}>UnityJournal</h1>
        <button onClick={() => setIsLocked(true)} style={{ background: 'none', border: '1px solid #555', color: '#ccc', padding: '5px 10px', borderRadius: '5px' }}>Esci</button>
      </header>
      <main style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#2d2d2d', padding: '25px', borderRadius: '15px', flex: 1 }}>
          <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>{pages[currentPage].title}</h2>
          <p style={{ lineHeight: '1.6', marginTop: '20px' }}>{pages[currentPage].content}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0} style={{ padding: '15px 30px', borderRadius: '10px', backgroundColor: '#444', color: '#fff', border: 'none', fontSize: '20px' }}>{"<"}</button>
          <span style={{ color: '#888' }}>Pagina {currentPage + 1} di {pages.length}</span>
          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === pages.length - 1} style={{ padding: '15px 30px', borderRadius: '10px', backgroundColor: '#444', color: '#fff', border: 'none', fontSize: '20px' }}>{">"}</button>
        </div>
      </main>
    </div>
  );
};

export default UnityJournal;
