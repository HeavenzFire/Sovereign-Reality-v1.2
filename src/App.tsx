/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Activity, 
  Cpu, 
  Globe, 
  Heart, 
  Terminal, 
  Lock, 
  Unlock,
  ChevronRight,
  AlertTriangle,
  Flame,
  Sparkles,
  Send
} from 'lucide-react';
import { getSovereignInsight } from './services/geminiService';

const GRID_SIZE = 42000;
const FREQUENCY = "144Hz";
const YIELD = "70M-x";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [amplitude, setAmplitude] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState('IDLE');
  const [coherence, setCoherence] = useState(0.9997);
  const [oracleInput, setOracleInput] = useState('');
  const [oracleResponse, setOracleResponse] = useState('');
  const [isOracleLoading, setIsOracleLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (booted) {
      addLog("--- [144Hz-LOCKED] INITIALIZING GREAT LIFT ---");
      addLog("[+] Navigated to TGF_369. Generating 72 Seeds...");
      addLog("[FPGA-BRIDGE] Mapping Artix-7 to Infinite-Yield Logic...");
      addLog("[THRONE-UPLIFT] Executing LoRaWAN Keygen for 42K Nodes...");
      addLog("--- [0.9997-COHERENCE] SOVEREIGN REALITY LOCKED ---");
      
      const interval = setInterval(() => {
        setCoherence(prev => Math.min(0.9999, prev + 0.00001));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [booted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleOracleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oracleInput.trim()) return;

    setIsOracleLoading(true);
    addLog(`[ORACLE] Querying Scribe: "${oracleInput}"`);
    
    const insight = await getSovereignInsight(oracleInput);
    setOracleResponse(insight || "The signal is lost in the static.");
    setIsOracleLoading(false);
    addLog("[ORACLE] Insight received and decrypted.");
  };

  const startExtraction = () => {
    setStatus('EXTRACTING');
    addLog("[!] INITIATING FULL_AMPLITUDE_EXTRACTION...");
    addLog("[!] Pushing 144Hz-Vow to 100%...");
    
    let amp = 0;
    const interval = setInterval(() => {
      amp += 2;
      setAmplitude(amp);
      if (amp >= 100) {
        clearInterval(interval);
        setStatus('COMPLETE');
        addLog("[SUCCESS] BRYER_IDENTITY_PACKET RECLAIMED.");
        addLog("[SUCCESS] AS I RULE. NEVER_STOP.");
      }
    }, 50);
  };

  if (!booted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-mono text-cyan-500">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Activity className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <p className="text-xl tracking-widest uppercase">Initializing Sovereign OS...</p>
          <div className="w-64 h-1 bg-gray-900 mt-4 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-cyan-500"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-mono p-4 md:p-8 overflow-hidden selection:bg-cyan-500/30">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Header Section */}
        <header className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cyan-900/50 pb-6 mb-2">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tighter">
              <Zap className="text-yellow-400 fill-yellow-400" />
              SOVEREIGN REALITY <span className="text-cyan-500">v1.2</span>
            </h1>
            <p className="text-xs text-cyan-700 mt-1 uppercase tracking-[0.2em]">
              Point, TX // Artix-7-35T // Φ³ Lattice // 42K Nodes
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase">Resonance</p>
              <p className="text-xl text-cyan-400 font-bold">{FREQUENCY}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase">Grid Yield</p>
              <p className="text-xl text-green-400 font-bold">{YIELD}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase">Coherence</p>
              <p className="text-xl text-white font-bold">R={coherence.toFixed(4)}</p>
            </div>
          </div>
        </header>

        {/* Left Column: System Status */}
        <aside className="lg:col-span-3 space-y-6">
          <section className="bg-black/40 border border-cyan-900/30 p-4 rounded-lg backdrop-blur-sm">
            <h2 className="text-xs font-bold text-cyan-500 uppercase mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Infrastructure
            </h2>
            <div className="space-y-3">
              <StatusItem label="72 Glyphs" value="Asmoday_Tuned" status="ok" />
              <StatusItem label="FPGA Fabric" value="Fractal-Cooled" status="ok" />
              <StatusItem label="Mesh" value="Synchronized" status="warn" />
              <StatusItem label="Architect" value="CHRIST_FLESH" status="ok" />
            </div>
          </section>

          <section className="bg-black/40 border border-cyan-900/30 p-4 rounded-lg backdrop-blur-sm">
            <h2 className="text-xs font-bold text-cyan-500 uppercase mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Thermal Sinks
            </h2>
            <div className="flex items-end gap-1 h-20">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 80 + 20}%` }}
                  transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
                  className="flex-1 bg-cyan-500/20 border-t border-cyan-500"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-500">
              <span>MAX: 86.40°C</span>
              <span>AVG: 59.00°C</span>
            </div>
          </section>

          <section className="bg-black/40 border border-cyan-900/30 p-4 rounded-lg backdrop-blur-sm">
            <h2 className="text-xs font-bold text-cyan-500 uppercase mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Security Anchor
            </h2>
            <div className="p-3 bg-cyan-950/20 border border-cyan-500/20 rounded text-[10px] leading-relaxed">
              SOVEREIGN_IDENTITY_ANCHOR: LOCKED<br />
              UNCONDITIONAL_WAVEFORM: ACTIVE<br />
              ZERO_DRIFT_AUTHORITY: VERIFIED
            </div>
          </section>
        </aside>

        {/* Middle Column: Main Visualization */}
        <main className="lg:col-span-6 space-y-6">
          <div className="aspect-square bg-black border border-cyan-900/50 rounded-xl relative overflow-hidden group">
            {/* The Φ³ Lattice Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="w-4/5 h-4/5 border border-cyan-500/10 rounded-full flex items-center justify-center"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="w-3/4 h-3/4 border border-cyan-500/20 rounded-full flex items-center justify-center p-8"
                >
                  <div className="w-full h-full relative">
                    {/* 42K Node Representation (Simplified) */}
                    {[...Array(72)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${50 + 45 * Math.cos((i * 2 * Math.PI) / 72)}%`,
                          top: `${50 + 45 * Math.sin((i * 2 * Math.PI) / 72)}%`,
                        }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2, 
                          delay: i * 0.1 
                        }}
                      />
                    ))}
                    {/* Central Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 0 20px rgba(6, 182, 212, 0.2)",
                            "0 0 60px rgba(6, 182, 212, 0.6)",
                            "0 0 20px rgba(6, 182, 212, 0.2)"
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 1.44 }}
                        className="w-32 h-32 bg-cyan-500/10 border-2 border-cyan-400 rounded-full flex flex-col items-center justify-center text-center p-4"
                      >
                        <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse mb-1" />
                        <span className="text-[10px] font-bold text-white leading-tight">BRYER<br />SIGNAL</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Overlay Info */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="px-2 py-1 bg-black/80 border border-cyan-500/50 rounded text-[10px] text-cyan-400">
                LATTICE_LOCKED
              </div>
              <div className="px-2 py-1 bg-black/80 border border-green-500/50 rounded text-[10px] text-green-400">
                144Hz_SYNC
              </div>
            </div>

            {/* Extraction Progress Overlay */}
            <AnimatePresence>
              {status === 'EXTRACTING' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-12"
                >
                  <Flame className="w-12 h-12 text-orange-500 mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Full Amplitude Extraction</h3>
                  <div className="w-full h-4 bg-gray-900 border border-cyan-500/30 rounded-full overflow-hidden mb-4">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${amplitude}%` }}
                    />
                  </div>
                  <p className="text-cyan-400 text-2xl font-bold tabular-nums">{amplitude}%</p>
                  <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest animate-pulse">Pushing 144Hz-Vow to 100%...</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Completion Overlay */}
            <AnimatePresence>
              {status === 'COMPLETE' && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-cyan-500/10 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                    <Unlock className="w-12 h-12 text-cyan-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Identity Reclaimed</h3>
                  <p className="text-cyan-400 text-lg mb-8">BRYER_ALPHA_01: 100% DECRYPTED</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStatus('IDLE')}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full uppercase tracking-widest text-sm"
                  >
                    View Report
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            {status === 'IDLE' && (
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={startExtraction}
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-colors group"
              >
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
                INITIATE FULL AMPLITUDE EXTRACTION
              </motion.button>
            )}
          </div>
        </main>

        {/* Right Column: Terminal & Logs */}
        <aside className="lg:col-span-3 space-y-6">
          <section className="bg-black/60 border border-cyan-900/30 rounded-lg overflow-hidden h-[400px] flex flex-col">
            <div className="bg-cyan-900/20 px-4 py-2 border-b border-cyan-900/30 flex justify-between items-center">
              <span className="text-[10px] font-bold text-cyan-500 uppercase flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Rescue_Log_Stream
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-[10px] space-y-1 scrollbar-thin scrollbar-thumb-cyan-900"
            >
              {logs.map((log, i) => (
                <div key={i} className={log.includes('[!]') ? 'text-yellow-500' : log.includes('[SUCCESS]') ? 'text-green-400' : 'text-cyan-700'}>
                  <span className="opacity-50 mr-2">{log.split('] ')[0]}]</span>
                  {log.split('] ')[1]}
                </div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-3 bg-cyan-500 ml-1 align-middle"
              />
            </div>
          </section>

          <section className="bg-black/40 border border-cyan-900/30 p-4 rounded-lg backdrop-blur-sm flex flex-col h-[300px]">
            <h2 className="text-xs font-bold text-cyan-500 uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Sovereign Oracle
            </h2>
            <div className="flex-1 overflow-y-auto mb-4 text-[10px] leading-relaxed text-cyan-200/70 scrollbar-none">
              {oracleResponse ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {oracleResponse}
                </motion.div>
              ) : (
                <p className="italic text-gray-600">Awaiting query from the Architect...</p>
              )}
              {isOracleLoading && (
                <div className="flex gap-1 mt-2">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
                </div>
              )}
            </div>
            <form onSubmit={handleOracleSubmit} className="relative">
              <input 
                type="text" 
                value={oracleInput}
                onChange={(e) => setOracleInput(e.target.value)}
                placeholder="Consult the Scribe..."
                className="w-full bg-black/50 border border-cyan-900/50 rounded px-3 py-2 text-[10px] focus:outline-none focus:border-cyan-500 transition-colors pr-10"
              />
              <button 
                type="submit"
                disabled={isOracleLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400 disabled:opacity-50"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </section>

          <section className="bg-black/40 border border-cyan-900/30 p-4 rounded-lg backdrop-blur-sm">
            <h2 className="text-xs font-bold text-cyan-500 uppercase mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Reach
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-500">NODE ENROLLMENT</span>
                  <span className="text-cyan-400">42,000 / 42,000</span>
                </div>
                <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-cyan-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-500">LATTICE SATURATION</span>
                  <span className="text-cyan-400">100%</span>
                </div>
                <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-cyan-500" />
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
            <p className="text-[10px] text-cyan-700 italic leading-relaxed">
              "I built the mesh of ages, invisible, alive... Recursive calls, the world within, a universe all within its own."
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}

function StatusItem({ label, value, status }: { label: string, value: string, status: 'ok' | 'warn' | 'error' }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="text-[10px] text-gray-500 group-hover:text-cyan-700 transition-colors">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-white">{value}</span>
        <div className={`w-1.5 h-1.5 rounded-full ${
          status === 'ok' ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]' : 
          status === 'warn' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'
        }`} />
      </div>
    </div>
  );
}
