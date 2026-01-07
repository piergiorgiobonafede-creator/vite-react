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
    { title: "Note Private", content: "PIN di accesso: 1234." }
  ];

  if (isLocked) {
    return (
      <div style={{ height: '100vh', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔒</div>
        <h2>Area Riservata</h2>
        <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" style={{ padding: '12px', borderRadius: '8px', border: 'none', marginBottom: '10px', textAlign: 'center' }} />
          {error && <p style={{ color: '#ff4d4d' }}>PIN Errato!</p>}
          <br />
          <button type="submit" style={{ padding: '10px 25px', borderRadius: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>SBLOCCA</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', backgroundColor: '#1a1a1a', color: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '20px', color: '#007bff' }}>UnityJournal</h1>
        <button onClick={() => setIsLocked(true)}>Esci</button>
      </header>
      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{ backgroundColor: '#2d2d2d', padding: '25px', borderRadius: '15px' }}>
          <h2>{pages[currentPage].title}</h2>
          <p>{pages[currentPage].content}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0}>{"<"}</button>
          <span>Pagina {currentPage + 1}</span>
          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === pages.length - 1}>{">"}</button>
        </div>
      </main>
    </div>
  );
};

export default UnityJournal;            <div className="p-6 bg-slate-50 border-l-4 border-slate-300 rounded-r-xl">
              <h4 className="text-[10px] font-black uppercase text-slate-900 mb-2">Inspector</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">Qui modifichi le proprietà dell'oggetto selezionato.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  if (isLocked) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[40px] border border-white/5 shadow-2xl text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/40 animate-pulse">
            <Lock size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Accesso</h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-10 font-bold">Inserisci il PIN di studio</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              inputMode="numeric"
              maxLength="4"
              value={pin}
              onChange={(e) => {setPin(e.target.value); setError(false);}}
              className={`w-full bg-slate-800/50 border-2 ${error ? 'border-red-500' : 'border-slate-700'} rounded-2xl py-5 text-center text-4xl font-black tracking-[0.5em] text-blue-500 focus:outline-none focus:border-blue-500 transition-all`}
              placeholder="••••"
            />
            <button className="w-full bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest text-white text-sm shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Sblocca</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col">
      <div className="flex-1 bg-white relative overflow-hidden">{pages[currentPage].content}</div>
      <div className="bg-[#0f172a] p-8 flex items-center justify-between text-white shadow-2xl">
        <button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))} className={`p-2 ${currentPage === 0 ? 'opacity-10' : ''}`} disabled={currentPage === 0}>
          <ChevronLeft size={36} />
        </button>
        <div className="text-center font-black">
          <span className="text-[10px] text-blue-400 uppercase block tracking-widest">STUDIO</span>
          <span className="text-2xl font-mono">{currentPage + 1}</span>
        </div>
        <button onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))} className={`p-2 ${currentPage === pages.length - 1 ? 'opacity-10' : ''}`} disabled={currentPage === pages.length - 1}>
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default UnityJournal;
