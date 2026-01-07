import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Lock, EyeOff, ShieldCheck } from 'lucide-react';

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
    {
      type: 'cover',
      content: (
        <div className="h-full w-full bg-[#020617] text-white p-10 flex flex-col justify-between font-sans">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-black px-3 py-1 rounded-full border border-blue-500/20">
              <ShieldCheck size={12} /> ARCHIVIO PRIVATO
            </div>
            <EyeOff size={16} className="text-slate-700" />
          </div>
          <div>
            <h1 className="text-5xl font-black tracking-tighter leading-none mb-6">
              UNITY<br/><span className="text-blue-500 italic font-light tracking-normal text-4xl uppercase">Studio</span>
            </h1>
            <div className="h-1 w-16 bg-white mb-8"></div>
            <p className="text-slate-400 text-sm font-light leading-relaxed border-l border-slate-800 pl-4 uppercase tracking-widest">
              Appunti personali e<br/>bozze di sviluppo
            </p>
          </div>
          <p className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em]">Piergiorgio // 2026</p>
        </div>
      )
    },
    {
      type: 'content',
      content: (
        <div className="h-full w-full bg-white p-10 text-slate-800 font-sans">
          <header className="flex justify-between items-center mb-10 border-b border-slate-100 pb-4">
            <span className="font-black text-[10px] text-blue-600 uppercase tracking-widest">Modulo 01</span>
            <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-1 rounded">PAG 02</span>
          </header>
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-slate-950">
            L'Interfaccia<br/><span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-4">Unity Editor</span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl">
              <h4 className="text-[10px] font-black uppercase text-slate-900 mb-2">Hierarchy</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">È la lista di tutti gli oggetti presenti nella tua scena attuale.</p>
            </div>
            <div className="p-6 bg-slate-50 border-l-4 border-slate-300 rounded-r-xl">
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
