import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  RefreshCw, 
  Zap, 
  Server, 
  Lock, 
  Database,
  Radio,
  Users,
  Play
} from 'lucide-react';

export default function ArchitectureSimulator() {
  const [activeTab, setActiveTab] = useState('fintech');

  // Fintech Simulator State
  const [gateway, setGateway] = useState('razorpay');
  const [amount, setAmount] = useState(2499);
  const [paymentStep, setPaymentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [logs, setLogs] = useState([]);
  const [orderData, setOrderData] = useState(null);

  // SSE WardWatch Simulator State
  const [sseActive, setSseActive] = useState(true);
  const [wardRole, setWardRole] = useState('Doctor');
  const [beds, setBeds] = useState([
    { id: 'ICU-101', patient: 'A. Sharma', status: 'Critical', hr: 98, spo2: 95, nurse: 'R. Nair' },
    { id: 'ICU-102', patient: 'M. Patel', status: 'Stable', hr: 74, spo2: 99, nurse: 'R. Nair' },
    { id: 'GEN-204', patient: 'K. Desai', status: 'Recovering', hr: 70, spo2: 98, nurse: 'S. Khan' },
    { id: 'EMERG-01', patient: 'Vacant', status: 'Available', hr: '-', spo2: '-', nurse: 'Unassigned' },
  ]);
  const [sseEvents, setSseEvents] = useState([]);

  // DevTogether State
  const [collabCode, setCollabCode] = useState(`// DevTogether Real-Time WebSocket Node
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('⚡ Peer connected to room: session-mern-99');
  ws.on('message', (payload) => {
    // Broadcast OT delta to concurrent editors
    broadcast(payload);
  });
});`);
  const [connectedUsers, setConnectedUsers] = useState(['Riyaz (Host)', 'Sarah (Edviron)', 'Alex (Capgemini)']);
  const [terminalOutput, setTerminalOutput] = useState([
    '[system] Connected to DevTogether WebSocket gateway.',
    '[system] Latency: 22ms | Room: #dev-collab-7',
    '> node server.js',
    '⚡ DevTogether cluster online. Listening on :8080'
  ]);

  // Handle Fintech Simulation
  const runPaymentSimulation = () => {
    setIsProcessing(true);
    setPaymentStep(1);
    setLogs([]);
    const genOrderId = `order_${gateway.slice(0, 3)}_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    setLogs(prev => [...prev, `[INIT] User selected gateway: ${gateway.toUpperCase()} for amount ₹${amount}`]);

    setTimeout(() => {
      setPaymentStep(2);
      setLogs(prev => [...prev, `[AUTH] NestJS API validated idempotency key & signed payload with gateway secret.`]);
      setOrderData({
        orderId: genOrderId,
        amount,
        currency: 'INR',
        gateway: gateway.toUpperCase(),
        timestamp: new Date().toLocaleTimeString()
      });
    }, 900);

    setTimeout(() => {
      setPaymentStep(3);
      setLogs(prev => [...prev, `[GATEWAY] ${gateway.toUpperCase()} handshake success. Simulated bank OTP verified.`]);
      setLogs(prev => [...prev, `[WEBHOOK] HMAC-SHA256 signature checked: 4f8a...3e9b (VALID).`]);
    }, 2000);

    setTimeout(() => {
      setPaymentStep(4);
      setLogs(prev => [...prev, `[DATABASE] MongoDB ledger transaction committed: payment status -> CAPTURED.`]);
      setLogs(prev => [...prev, `[DASHBOARD] Real-Time React dashboard counter updated (+₹${amount}).`]);
      setIsProcessing(false);
    }, 3200);
  };

  // SSE Simulator Tick
  useEffect(() => {
    if (!sseActive) return;
    const interval = setInterval(() => {
      const bedIndex = Math.floor(Math.random() * 3); // pick non-vacant bed
      const hrDelta = Math.floor(Math.random() * 5) - 2;
      
      setBeds(prev => {
        const copy = [...prev];
        const target = copy[bedIndex];
        const newHr = typeof target.hr === 'number' ? Math.max(60, Math.min(130, target.hr + hrDelta)) : 75;
        copy[bedIndex] = { ...target, hr: newHr };
        return copy;
      });

      const newEvent = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        type: 'BED_VITALS_STREAM',
        message: `SSE Telemetry event for ${beds[bedIndex]?.id}: HR updated to ${beds[bedIndex]?.hr} bpm`,
      };
      setSseEvents(prev => [newEvent, ...prev.slice(0, 5)]);
    }, 3500);

    return () => clearInterval(interval);
  }, [sseActive, beds]);

  return (
    <section id="architecture-lab" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Architecture Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Live Interactive <span className="text-gradient-cyan">System Simulators</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Test the real-world engineering concepts behind my resume projects: 
            multi-gateway fintech pipelines, real-time Server-Sent Events (SSE), and WebSocket synchronization.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('fintech')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'fintech'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Fintech Payment Pipeline (Edviron)</span>
          </button>

          <button
            onClick={() => setActiveTab('sse')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'sse'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>WardWatch SSE Telemetry (MERN)</span>
          </button>

          <button
            onClick={() => setActiveTab('collab')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'collab'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>DevTogether WebSockets &amp; Terminal</span>
          </button>
        </div>

        {/* SIMULATOR 1: FINTECH PAYMENT PIPELINE */}
        {activeTab === 'fintech' && (
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-emerald-500/30">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Configuration Pane */}
              <div className="w-full lg:w-1/3 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Edviron Payment Engine</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Multi-gateway architecture with idempotency locks &amp; HMAC webhook authentication.
                  </p>
                </div>

                {/* Gateway Selector */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2">SELECT PRODUCTION GATEWAY</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['razorpay', 'cashfree', 'easebuzz'].map((gw) => (
                      <button
                        key={gw}
                        onClick={() => setGateway(gw)}
                        disabled={isProcessing}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold capitalize border transition-all ${
                          gateway === gw
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm'
                            : 'bg-dark-900 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {gw}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount input */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2">TRANSACTION AMOUNT (INR)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-semibold">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      disabled={isProcessing}
                      className="w-full bg-dark-900 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={runPaymentSimulation}
                  disabled={isProcessing}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Cryptographic Handshake...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Execute Multi-Stage Payment Flow</span>
                    </>
                  )}
                </button>

                {/* Info Card */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <div className="font-semibold text-slate-300">Riyaz's Engineering Highlights:</div>
                  <div>• Integrated Razorpay, Cashfree &amp; Easebuzz SDKs</div>
                  <div>• Engineered webhook signature validation preventing forgery</div>
                  <div>• Handled MongoDB atomic ledger updates</div>
                </div>
              </div>

              {/* Right: Flow Pipeline Animation & Logs */}
              <div className="w-full lg:w-2/3 space-y-6">
                {/* 4 Pipeline Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    { step: 1, title: '1. Validation', desc: 'Idempotency & DTO', icon: Lock },
                    { step: 2, title: '2. Gateway Handshake', desc: 'Order Session', icon: Server },
                    { step: 3, title: '3. Webhook HMAC', desc: 'SHA-256 Check', icon: ShieldCheck },
                    { step: 4, title: '4. Mongo Ledger', desc: 'State Committed', icon: Database },
                  ].map((s) => {
                    const isDone = paymentStep >= s.step;
                    const isCurrent = paymentStep === s.step && isProcessing;
                    const IconComp = s.icon;
                    return (
                      <div
                        key={s.step}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isDone
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                            : 'bg-dark-900/60 border-slate-800 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <IconComp className={`w-4 h-4 ${isDone ? 'text-emerald-400' : 'text-slate-600'}`} />
                          {isCurrent && <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />}
                          {paymentStep > s.step && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                        </div>
                        <div className="text-xs font-bold text-white">{s.title}</div>
                        <div className="text-[11px] text-slate-400">{s.desc}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Console Log Window */}
                <div className="rounded-2xl bg-dark-950 border border-slate-800 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-slate-400 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 font-mono text-slate-300">payment-engine-worker.log</span>
                    </div>
                    <span>Cluster: Mumbai-Node-01</span>
                  </div>

                  <div className="space-y-1.5 min-h-[160px] max-h-[220px] overflow-y-auto">
                    {logs.length === 0 ? (
                      <div className="text-slate-500 italic py-6 text-center">
                        Select a gateway and click "Execute Multi-Stage Payment Flow" to see real-time pipeline telemetry...
                      </div>
                    ) : (
                      logs.map((log, index) => (
                        <div key={index} className="flex gap-2 text-slate-300">
                          <span className="text-emerald-400">➜</span>
                          <span>{log}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {orderData && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                      <div>Order: <span className="text-cyan-300">{orderData.orderId}</span></div>
                      <div>Status: <span className="text-emerald-400 font-bold">SETTLED</span></div>
                      <div>Gateway: <span className="text-white font-mono">{orderData.gateway}</span></div>
                      <div>Recorded: <span>{orderData.timestamp}</span></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 2: WARDWATCH SSE STREAM */}
        {activeTab === 'sse' && (
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Config & RBAC */}
              <div className="w-full lg:w-1/3 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <span>WardWatch Clinical SSE</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Real-time hospital ward management with Server-Sent Events &amp; Role-Based Access Control.
                  </p>
                </div>

                {/* Role Switcher */}
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2">SIMULATE ACTIVE RBAC ROLE</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Doctor', 'Nurse', 'Admin'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setWardRole(role)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                          wardRole === role
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-dark-900 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SSE Toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-dark-900 border border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-white">SSE Telemetry Stream</div>
                    <div className="text-[11px] text-slate-400">Pushing updates over HTTP/2 EventSource</div>
                  </div>
                  <button
                    onClick={() => setSseActive(!sseActive)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      sseActive
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}
                  >
                    {sseActive ? 'CONNECTED' : 'PAUSED'}
                  </button>
                </div>

                {/* Role Permission Preview */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 text-xs space-y-2">
                  <div className="text-slate-300 font-semibold flex items-center justify-between">
                    <span>Role Permissions:</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{wardRole}</span>
                  </div>
                  <ul className="text-slate-400 space-y-1 text-[11px]">
                    <li>• View Real-Time Bed Occupancy: <span className="text-emerald-400">Allowed</span></li>
                    <li>• Modify Treatment &amp; Medication: <span className={wardRole === 'Doctor' ? 'text-emerald-400' : 'text-slate-600'}>{wardRole === 'Doctor' ? 'Allowed' : 'Restricted'}</span></li>
                    <li>• Update Vitals &amp; Shift Notes: <span className={wardRole !== 'Admin' ? 'text-emerald-400' : 'text-slate-600'}>{wardRole !== 'Admin' ? 'Allowed' : 'Restricted'}</span></li>
                    <li>• Discharge &amp; Hospital Invoicing: <span className={wardRole === 'Admin' ? 'text-emerald-400' : 'text-slate-600'}>{wardRole === 'Admin' ? 'Allowed' : 'Restricted'}</span></li>
                  </ul>
                </div>
              </div>

              {/* Right: Real-Time Beds Grid & SSE Events */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {beds.map((bed) => (
                    <div
                      key={bed.id}
                      className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">{bed.id}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          bed.status === 'Critical' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' :
                          bed.status === 'Stable' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
                          bed.status === 'Recovering' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {bed.status}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-white mb-2">{bed.patient}</div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                        <div>Heart Rate: <span className="text-white font-mono font-bold">{bed.hr} bpm</span></div>
                        <div>SpO2: <span className="text-white font-mono font-bold">{bed.spo2}%</span></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SSE Telemetry Feed */}
                <div className="rounded-2xl bg-dark-950 border border-slate-800 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-slate-400 text-[11px]">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>Live EventSource SSE Stream (/api/v1/wards/stream)</span>
                    </div>
                    <span className="text-emerald-400">HTTP/2 ACTIVE</span>
                  </div>
                  <div className="space-y-1.5 max-h-[140px] overflow-y-auto text-[11px]">
                    {sseEvents.length === 0 ? (
                      <div className="text-slate-500 italic py-2">Listening for incoming SSE chunks...</div>
                    ) : (
                      sseEvents.map((evt) => (
                        <div key={evt.id} className="text-slate-300 flex items-center justify-between">
                          <span className="text-cyan-400">[{evt.time}] {evt.message}</span>
                          <span className="text-slate-500 text-[10px]">200 OK</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 3: DEVTOGETHER WEBSOCKETS */}
        {activeTab === 'collab' && (
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-purple-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Code Editor Mock */}
              <div className="lg:col-span-2 rounded-2xl bg-dark-950 border border-slate-800 overflow-hidden flex flex-col">
                <div className="bg-dark-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 font-mono text-slate-300">server.js - DevTogether Pair Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                    <span>3 Peers In Sync</span>
                  </div>
                </div>
                <div className="p-4 flex-1 font-mono text-xs text-slate-300">
                  <textarea
                    value={collabCode}
                    onChange={(e) => {
                      setCollabCode(e.target.value);
                      setTerminalOutput(prev => [...prev.slice(-6), `[ws-delta] Riyaz emitted operational delta: ${e.target.value.length} bytes`]);
                    }}
                    rows={10}
                    className="w-full bg-transparent resize-none focus:outline-none text-slate-300 leading-relaxed font-mono selection:bg-purple-500/30"
                  />
                </div>
              </div>

              {/* Connected Peers & Terminal Feed */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800">
                  <div className="text-xs font-bold text-white mb-3 flex items-center justify-between">
                    <span>Connected Collaborative Peers</span>
                    <span className="text-xs font-mono text-purple-400">{connectedUsers.length}</span>
                  </div>
                  <div className="space-y-2">
                    {connectedUsers.map((user, i) => (
                      <div key={i} className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-emerald-400'}`}></span>
                          {user}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">RTT ~24ms</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-400 text-xs mb-2 font-bold flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>Live Shared Terminal</span>
                  </div>
                  <div className="space-y-1 max-h-[140px] overflow-y-auto">
                    {terminalOutput.map((line, idx) => (
                      <div key={idx} className="text-slate-400">
                        <span className="text-purple-400">$ </span>{line}
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
