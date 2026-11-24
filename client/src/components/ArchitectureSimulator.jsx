import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Activity, 
  Terminal, 
  RotateCw, 
  Radio, 
  Users, 
  Play, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert,
  Send
} from 'lucide-react';

export default function ArchitectureSimulator() {
  const [activeTab, setActiveTab] = useState('fintech');

  // Listen to external triggers (e.g. from Projects cards)
  useEffect(() => {
    const handleTabSwitch = (e) => {
      if (e.detail) setActiveTab(e.detail);
    };
    window.addEventListener('switch-workbench-tab', handleTabSwitch);
    return () => window.removeEventListener('switch-workbench-tab', handleTabSwitch);
  }, []);

  // ─────────────────────────────────────────────────────────────
  // 1. FINTECH WORKBENCH STATE
  // ─────────────────────────────────────────────────────────────
  const [gateway, setGateway] = useState('razorpay');
  const [amount, setAmount] = useState(2500);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const runPaymentWorkflow = () => {
    setIsProcessing(true);
    setStep(1);
    setResult(null);

    setTimeout(() => setStep(2), 600);
    setTimeout(() => setStep(3), 1300);
    setTimeout(() => {
      setStep(4);
      setResult({
        orderId: `order_${gateway.slice(0, 3).toUpperCase()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
        status: 'CAPTURED',
        signature: 'sha256_' + Math.random().toString(36).substring(2, 10),
        timestamp: new Date().toLocaleTimeString()
      });
      setIsProcessing(false);
    }, 2100);
  };

  // ─────────────────────────────────────────────────────────────
  // 2. WARDWATCH SSE STATE & ACTIONS
  // ─────────────────────────────────────────────────────────────
  const [sseRunning, setSseRunning] = useState(true);
  const [role, setRole] = useState('Doctor');
  const [activeBedFlash, setActiveBedFlash] = useState(null);
  const [beds, setBeds] = useState([
    { id: 'Bed 101', dept: 'ICU Ward', patient: 'A. Sharma', hr: 96, spo2: 96, status: 'Critical' },
    { id: 'Bed 102', dept: 'ICU Ward', patient: 'M. Patel', hr: 74, spo2: 99, status: 'Stable' },
    { id: 'Bed 204', dept: 'General', patient: 'K. Desai', hr: 70, spo2: 98, status: 'Recovering' },
    { id: 'Bed 205', dept: 'Emergency', patient: 'Available', hr: '-', spo2: '-', status: 'Vacant' },
  ]);
  const [telemetryEvents, setTelemetryEvents] = useState([
    { id: 1, time: '21:04:10', text: 'SSE Stream connected. Listening on /api/v1/wards/stream', type: 'info' },
    { id: 2, time: '21:04:12', text: 'Telemetry packet: Bed 101 vitals synchronized (HR: 96)', type: 'normal' }
  ]);

  // Push instant telemetry update
  const pushSimulatedTelemetry = (targetIndex = 0, isAlert = false) => {
    const hrVal = isAlert ? 128 : Math.floor(Math.random() * 15) + 72;
    const spo2Val = isAlert ? 91 : Math.floor(Math.random() * 3) + 97;
    const newStatus = isAlert ? 'Critical' : (hrVal > 100 ? 'Critical' : 'Stable');

    setBeds(prev => {
      const copy = [...prev];
      copy[targetIndex] = {
        ...copy[targetIndex],
        hr: hrVal,
        spo2: spo2Val,
        status: newStatus
      };
      return copy;
    });

    setActiveBedFlash(beds[targetIndex].id);
    setTimeout(() => setActiveBedFlash(null), 1200);

    const newEvt = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      text: isAlert 
        ? `⚠️ EMERGENCY ALERT on ${beds[targetIndex].id}: HR ${hrVal} bpm, SpO2 ${spo2Val}%`
        : `SSE Stream pushed ${beds[targetIndex].id}: HR ${hrVal} bpm, SpO2 ${spo2Val}%`,
      type: isAlert ? 'alert' : 'normal'
    };

    setTelemetryEvents(prev => [newEvt, ...prev.slice(0, 5)]);
  };

  // Perform RBAC action
  const handleRbacAction = (actionName) => {
    const newEvt = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      text: `[RBAC: ${role}] Executed: ${actionName} (Permission verified)`,
      type: 'rbac'
    };
    setTelemetryEvents(prev => [newEvt, ...prev.slice(0, 5)]);
  };

  // SSE background telemetry tick
  useEffect(() => {
    if (!sseRunning) return;
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * 3); // non-vacant bed
      pushSimulatedTelemetry(idx, false);
    }, 4000);

    return () => clearInterval(timer);
  }, [sseRunning, beds]);

  // ─────────────────────────────────────────────────────────────
  // 3. DEVTOGETHER WEBSOCKET STATE & ACTIONS
  // ─────────────────────────────────────────────────────────────
  const [codeSnippet, setCodeSnippet] = useState(`// DevTogether Pair Session: server.js
const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'cluster_online', latency: '18ms' });
});

app.listen(8080);`);

  const [connectedPeers, setConnectedPeers] = useState([
    { name: 'Riyaz (Host)', role: 'Owner', status: 'Online' },
    { name: 'Alex (Reviewer)', role: 'Peer', status: 'Collaborating' }
  ]);
  const [packetsCount, setPacketsCount] = useState(42);
  const [peerTyping, setPeerTyping] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    '$ node server.js',
    '⚡ DevTogether WebSocket Cluster running on ws://localhost:8080',
    '✔ Peer "Alex" joined session #room-mern-204 (RTT: 18ms)'
  ]);

  // Action: Simulate peer typing into the editor via WebSockets
  const simulatePeerTyping = () => {
    setPeerTyping(true);
    setPacketsCount(c => c + 3);

    setTimeout(() => {
      setCodeSnippet(prev => prev + `\n// Alex added route via WebSocket delta:\napp.get('/api/users', (req, res) => res.json([]));`);
      setTerminalLogs(prev => [
        ...prev,
        `[ws-packet] Received operational delta from Alex: 64 bytes`,
        `[ws-broadcast] Delta broadcasted to 2 active room sockets`
      ]);
      setPeerTyping(false);
    }, 800);
  };

  // Action: Execute code in remote terminal
  const executeCodeInTerminal = () => {
    setTerminalLogs(prev => [
      ...prev,
      `$ npm test -- --coverage`,
      `> devtogether-runner: executing in isolated container...`,
      `PASS  tests/websocket.spec.js (18ms)`,
      `✔ WebSocket bidirectional event dispatch verified`,
      `✔ Operational conflict resolution passed (100% test coverage)`
    ]);
  };

  return (
    <section id="workbench" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Interactive Proof of Work</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Systems &amp; Architecture Workbench
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Click into each system below to trigger real-time actions: simulate payment cryptographic verification, push hospital telemetry vitals, or collaborate over WebSockets.
          </p>
        </div>

        {/* Minimalist Segmented Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab('fintech')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'fintech' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              1. Fintech Pipeline (Edviron)
            </button>
            <button
              onClick={() => setActiveTab('sse')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'sse' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>2. WardWatch SSE (MERN)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>
            <button
              onClick={() => setActiveTab('collab')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'collab' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              3. DevTogether WebSockets
            </button>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────── */}
        {/* TAB 1: FINTECH WORKBENCH */}
        {/* ───────────────────────────────────────────────────────── */}
        {activeTab === 'fintech' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-zinc-300" />
                    <h3 className="text-base font-semibold text-white">Production Payment Lifecycle</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Multi-gateway payment engine engineered at Edviron powering school fee collections.
                  </p>
                </div>

                {/* Gateway Picker */}
                <div>
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Select Gateway</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['razorpay', 'cashfree', 'easebuzz'].map((gw) => (
                      <button
                        key={gw}
                        onClick={() => setGateway(gw)}
                        disabled={isProcessing}
                        className={`px-3 py-2 rounded-xl text-xs font-medium capitalize border transition-all ${
                          gateway === gw
                            ? 'bg-white text-black border-white'
                            : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white'
                        }`}
                      >
                        {gw}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Amount (INR)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    disabled={isProcessing}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                  />
                </div>

                <button
                  onClick={runPaymentWorkflow}
                  disabled={isProcessing}
                  className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-medium tracking-tight transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Verifying Cryptographic Handshake...</span>
                    </>
                  ) : (
                    <span>Execute Multi-Stage Payment Flow</span>
                  )}
                </button>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 space-y-1">
                  <div>• Strict DTO &amp; idempotency validation (zero double charges)</div>
                  <div>• Cryptographic HMAC SHA-256 webhook check</div>
                  <div>• Atomic MongoDB ledger write</div>
                </div>
              </div>

              {/* Console / Output Column */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-black border border-zinc-800/80 p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-zinc-500 text-[11px]">
                  <span>fintech-pipeline-engine.log</span>
                  <span>status: {step === 4 ? '200 OK' : isProcessing ? 'processing' : 'ready'}</span>
                </div>

                <div className="py-4 space-y-3">
                  {[
                    { s: 1, label: '1. Payload & Idempotency Check', desc: 'Validates unique key to prevent duplicate charges' },
                    { s: 2, label: `2. ${gateway.toUpperCase()} Session Handshake`, desc: 'Secure order creation via official gateway REST API' },
                    { s: 3, label: '3. Webhook HMAC SHA-256 Verification', desc: 'Signature matched against cryptographic secret' },
                    { s: 4, label: '4. Atomic MongoDB Ledger Write', desc: 'Account balance & transaction state committed' },
                  ].map((item) => (
                    <div key={item.s} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 ${
                        step >= item.s
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}>
                        {step >= item.s ? '✓' : item.s}
                      </div>
                      <div>
                        <div className={`text-xs ${step >= item.s ? 'text-zinc-200 font-medium' : 'text-zinc-500'}`}>
                          {item.label}
                        </div>
                        <div className="text-[11px] text-zinc-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {result ? (
                  <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-400 flex items-center justify-between">
                    <div>Order Ref: <span className="text-zinc-200">{result.orderId}</span></div>
                    <div>Signature: <span className="text-emerald-400">HMAC-SHA256 VERIFIED</span></div>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-600">
                    Click "Execute Multi-Stage Payment Flow" to watch the pipeline execute live.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────── */}
        {/* TAB 2: WARDWATCH SSE WORKBENCH (FULL INTERACTION) */}
        {/* ───────────────────────────────────────────────────────── */}
        {activeTab === 'sse' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-base font-semibold text-white">WardWatch Live Telemetry Stream</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Server-Sent Events (SSE) streaming real-time hospital bed vitals with Role-Based Access Control (RBAC).
                  </p>
                </div>

                {/* RBAC Role Selector */}
                <div>
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">
                    Select Active Staff Role (RBAC)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Doctor', 'Nurse', 'Admin'].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          role === r
                            ? 'bg-white text-black border-white'
                            : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Triggers */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block">
                    Interactive Actions (Click to Test)
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => pushSimulatedTelemetry(0, false)}
                      className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-200 font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Push Vitals Packet</span>
                    </button>

                    <button
                      onClick={() => pushSimulatedTelemetry(0, true)}
                      className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/40 border border-red-800/60 text-xs text-red-300 font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span>Simulate Critical Alert</span>
                    </button>
                  </div>

                  {/* Role-specific button */}
                  {role === 'Doctor' && (
                    <button
                      onClick={() => handleRbacAction('Ordered emergency cardiology consult & adjusted dosage')}
                      className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 font-medium transition-colors"
                    >
                      Doctor Action: Update Drug Prescription
                    </button>
                  )}
                  {role === 'Nurse' && (
                    <button
                      onClick={() => handleRbacAction('Logged shift vitals assessment & IV drip observation')}
                      className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 font-medium transition-colors"
                    >
                      Nurse Action: Log Hourly Vitals Observation
                    </button>
                  )}
                  {role === 'Admin' && (
                    <button
                      onClick={() => handleRbacAction('Processed patient admission paperwork & bed reservation')}
                      className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 font-medium transition-colors"
                    >
                      Admin Action: Process Ward Admission &amp; Invoicing
                    </button>
                  )}
                </div>

                {/* SSE Connection toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                  <div>
                    <div className="text-zinc-300 font-medium flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${sseRunning ? 'bg-emerald-400 animate-ping' : 'bg-zinc-600'}`}></span>
                      <span>EventSource Telemetry Stream</span>
                    </div>
                    <div className="text-[11px] text-zinc-500">Unidirectional push over HTTP/2</div>
                  </div>
                  <button
                    onClick={() => setSseRunning(!sseRunning)}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {sseRunning ? 'Pause Stream' : 'Resume'}
                  </button>
                </div>
              </div>

              {/* Right Beds & SSE Event Feed */}
              <div className="lg:col-span-7 space-y-4">
                {/* 4 Hospital Beds */}
                <div className="grid grid-cols-2 gap-3">
                  {beds.map((b) => {
                    const isFlashing = activeBedFlash === b.id;
                    return (
                      <div
                        key={b.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isFlashing
                            ? 'bg-zinc-800 border-white ring-1 ring-white/20'
                            : 'bg-zinc-900/80 border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono font-medium text-zinc-300">{b.id}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                            b.status === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                            b.status === 'Stable' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                            b.status === 'Recovering' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                            'bg-zinc-800 text-zinc-500'
                          }`}>
                            {b.status}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-200 font-medium mb-1">{b.patient}</div>
                        <div className="flex gap-4 text-[11px] text-zinc-400 font-mono">
                          <span>HR: <strong className="text-white">{b.hr}</strong> bpm</span>
                          <span>SpO2: <strong className="text-white">{b.spo2}%</strong></span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Console SSE Feed */}
                <div className="p-4 rounded-xl bg-black border border-zinc-800/80 font-mono text-xs">
                  <div className="text-zinc-500 pb-2 mb-2 border-b border-zinc-800/60 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>Live EventSource Stream (/api/v1/wards/stream)</span>
                    </div>
                    <span className="text-emerald-400 font-mono">200 OK</span>
                  </div>
                  <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                    {telemetryEvents.map((e) => (
                      <div key={e.id} className="text-zinc-400 flex items-start justify-between text-[11px] gap-2">
                        <span className={e.type === 'alert' ? 'text-red-400 font-semibold' : e.type === 'rbac' ? 'text-cyan-300' : 'text-zinc-300'}>
                          {e.text}
                        </span>
                        <span className="text-zinc-600 shrink-0">{e.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────── */}
        {/* TAB 3: DEVTOGETHER WEBSOCKETS (FULL INTERACTION) */}
        {/* ───────────────────────────────────────────────────────── */}
        {activeTab === 'collab' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Controls & Actions */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <h3 className="text-base font-semibold text-white">DevTogether WebSocket Engine</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Multi-user collaborative code pairing with bidirectional state synchronization and shared execution container.
                  </p>
                </div>

                {/* Connected Peers Status */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                  <div className="flex items-center justify-between text-zinc-500 text-[11px] uppercase font-mono mb-2">
                    <span>Connected Session Peers</span>
                    <span>{connectedPeers.length} Active</span>
                  </div>
                  <div className="space-y-1.5">
                    {connectedPeers.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-zinc-300">
                        <span className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-emerald-400'}`}></span>
                          <span>{p.name}</span>
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">{p.role} • 18ms</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block">
                    Interactive Actions (Click to Test)
                  </label>

                  <button
                    onClick={simulatePeerTyping}
                    disabled={peerTyping}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{peerTyping ? 'Simulating Incoming Peer Typing...' : 'Simulate Peer Typing Delta (WebSocket Push)'}</span>
                  </button>

                  <button
                    onClick={executeCodeInTerminal}
                    className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-medium tracking-tight flex items-center justify-center gap-2 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Execute Code in Shared Terminal</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 space-y-1">
                  <div>Packets Exchanged: <span className="text-zinc-300 font-mono">{packetsCount}</span></div>
                  <div>Average Round-Trip Latency: <span className="text-emerald-400 font-mono">18ms</span></div>
                </div>
              </div>

              {/* Right: Code Editor & Virtual Terminal Output */}
              <div className="lg:col-span-7 space-y-4">
                {/* Editor Box */}
                <div className="rounded-xl bg-black border border-zinc-800/80 overflow-hidden font-mono text-xs">
                  <div className="px-4 py-2 bg-zinc-900/80 border-b border-zinc-800/80 text-zinc-500 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-300">server.js</span>
                      {peerTyping && <span className="text-cyan-400 text-[10px] animate-pulse">● Alex is typing...</span>}
                    </div>
                    <span className="text-emerald-400">WS Connected</span>
                  </div>
                  <textarea
                    value={codeSnippet}
                    onChange={(e) => {
                      setCodeSnippet(e.target.value);
                      setPacketsCount(c => c + 1);
                    }}
                    rows={8}
                    className="w-full p-4 bg-transparent resize-none text-zinc-300 focus:outline-none font-mono text-xs leading-relaxed"
                  />
                </div>

                {/* Virtual Terminal Container */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 font-mono text-[11px]">
                  <div className="text-zinc-500 pb-1.5 mb-1.5 border-b border-zinc-800/60 flex items-center justify-between text-[10px]">
                    <span>Shared Execution Terminal (/bin/bash)</span>
                    <button 
                      onClick={() => setTerminalLogs(['$ clear'])} 
                      className="text-zinc-500 hover:text-zinc-300"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-1 max-h-[110px] overflow-y-auto text-zinc-400">
                    {terminalLogs.map((log, i) => (
                      <div key={i} className={log.startsWith('✔') ? 'text-emerald-400' : log.startsWith('$') ? 'text-white' : 'text-zinc-400'}>
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
