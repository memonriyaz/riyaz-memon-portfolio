import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  RotateCw, 
  Radio, 
  Users, 
  Lock,
  ArrowRight
} from 'lucide-react';

export default function ArchitectureSimulator() {
  const [activeTab, setActiveTab] = useState('fintech');

  // Fintech Pipeline State
  const [gateway, setGateway] = useState('razorpay');
  const [amount, setAmount] = useState(2500);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  // WardWatch SSE State
  const [sseRunning, setSseRunning] = useState(true);
  const [role, setRole] = useState('Doctor');
  const [beds, setBeds] = useState([
    { id: 'Bed 101', dept: 'ICU', patient: 'A. Sharma', hr: 98, spo2: 96, status: 'Critical' },
    { id: 'Bed 102', dept: 'ICU', patient: 'M. Patel', hr: 76, spo2: 99, status: 'Stable' },
    { id: 'Bed 204', dept: 'General', patient: 'K. Desai', hr: 72, spo2: 98, status: 'Recovering' },
    { id: 'Bed 205', dept: 'Emergency', patient: 'Available', hr: '-', spo2: '-', status: 'Vacant' },
  ]);
  const [telemetryEvents, setTelemetryEvents] = useState([]);

  // DevTogether State
  const [connectedPeers, setConnectedPeers] = useState(['Riyaz (Host)', 'Reviewer (Guest)']);
  const [codeSnippet, setCodeSnippet] = useState(`// Collaborative WebSocket Server
wss.on('connection', (ws) => {
  ws.on('message', (delta) => {
    // Broadcast OT transformed delta
    broadcast(delta, ws);
  });
});`);

  const runPaymentWorkflow = () => {
    setIsProcessing(true);
    setStep(1);
    setResult(null);

    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1500);
    setTimeout(() => {
      setStep(4);
      setResult({
        orderId: `order_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        status: 'CAPTURED',
        signature: 'sha256_verified',
        timestamp: new Date().toLocaleTimeString()
      });
      setIsProcessing(false);
    }, 2400);
  };

  // SSE telemetry tick
  useEffect(() => {
    if (!sseRunning) return;
    const timer = setInterval(() => {
      const idx = Math.floor(Math.random() * 3);
      const delta = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
      setBeds((prev) => {
        const copy = [...prev];
        const target = copy[idx];
        if (typeof target.hr === 'number') {
          copy[idx] = { ...target, hr: Math.max(62, Math.min(125, target.hr + delta)) };
        }
        return copy;
      });

      const evt = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        text: `Telemetry pushed for ${beds[idx]?.id}: HR updated to ${beds[idx]?.hr} bpm`
      };
      setTelemetryEvents((prev) => [evt, ...prev.slice(0, 4)]);
    }, 3200);

    return () => clearInterval(timer);
  }, [sseRunning, beds]);

  return (
    <section id="workbench" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Systems &amp; Architecture</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Interactive Architecture Workbench
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Test the underlying technical concepts implemented in my resume projects: payment gateway webhook pipelines, real-time telemetry streaming, and collaborative sync.
          </p>
        </div>

        {/* Minimalist Segmented Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab('fintech')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'fintech' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Fintech Pipeline
            </button>
            <button
              onClick={() => setActiveTab('sse')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'sse' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              WardWatch SSE
            </button>
            <button
              onClick={() => setActiveTab('collab')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'collab' ? 'apple-segment-active' : 'text-zinc-400 hover:text-white'
              }`}
            >
              DevTogether Sync
            </button>
          </div>
        </div>

        {/* TAB 1: FINTECH WORKBENCH */}
        {activeTab === 'fintech' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-white">Payment Pipeline Verification</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Multi-gateway architecture built for Edviron powering school fee collections.
                  </p>
                </div>

                {/* Gateway Picker */}
                <div>
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">Gateway Provider</label>
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
                      <span>Verifying Handshake...</span>
                    </>
                  ) : (
                    <span>Simulate Payment Lifecycle</span>
                  )}
                </button>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 space-y-1">
                  <div>• Strict DTO &amp; idempotency validation</div>
                  <div>• Cryptographic HMAC SHA-256 webhook check</div>
                  <div>• Atomic MongoDB ledger write</div>
                </div>
              </div>

              {/* Console / Output Column */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-black border border-zinc-800/80 p-5 font-mono text-xs">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 text-zinc-500 text-[11px]">
                  <span>pipeline-runner.sh</span>
                  <span>status: {step === 4 ? '200 OK' : isProcessing ? 'processing' : 'idle'}</span>
                </div>

                {/* Step List */}
                <div className="py-4 space-y-3">
                  {[
                    { s: 1, label: 'Payload Validation', desc: 'Verify amount, currency, idempotency key' },
                    { s: 2, label: `${gateway.toUpperCase()} Session`, desc: 'Authenticate with gateway API' },
                    { s: 3, label: 'Webhook HMAC Verification', desc: 'SHA-256 signature verification' },
                    { s: 4, label: 'MongoDB Ledger State', desc: 'Atomically commit transaction' },
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

                {/* Result payload */}
                {result ? (
                  <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-400 flex items-center justify-between">
                    <div>Ref: <span className="text-zinc-200">{result.orderId}</span></div>
                    <div>Signature: <span className="text-emerald-400">HMAC-SHA256 OK</span></div>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-600">
                    Click "Simulate Payment Lifecycle" to run pipeline.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WARDWATCH SSE */}
        {activeTab === 'sse' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-white">WardWatch Clinical Telemetry</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Real-time bed management with Server-Sent Events (SSE) and Role-Based Access Control.
                  </p>
                </div>

                {/* Role Switcher */}
                <div>
                  <label className="text-[11px] font-mono text-zinc-500 uppercase block mb-1.5">RBAC Role View</label>
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

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                  <div>
                    <div className="text-zinc-300 font-medium">EventSource Connection</div>
                    <div className="text-[11px] text-zinc-500">Persistent unidirectional SSE stream</div>
                  </div>
                  <button
                    onClick={() => setSseRunning(!sseRunning)}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {sseRunning ? 'Pause' : 'Resume'}
                  </button>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 space-y-1">
                  <div>Active Role: <span className="text-zinc-300">{role}</span></div>
                  <div>Permission: {role === 'Doctor' ? 'Treatment & Orders' : role === 'Nurse' ? 'Vitals & Observation' : 'Admissions & Invoicing'}</div>
                </div>
              </div>

              {/* Right Beds & Feed */}
              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {beds.map((b) => (
                    <div key={b.id} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-medium text-zinc-300">{b.id}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          b.status === 'Critical' ? 'bg-red-500/10 text-red-400' :
                          b.status === 'Stable' ? 'bg-emerald-500/10 text-emerald-400' :
                          b.status === 'Recovering' ? 'bg-amber-500/10 text-amber-400' :
                          'bg-zinc-800 text-zinc-500'
                        }`}>
                          {b.status}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-200 font-medium">{b.patient}</div>
                      <div className="flex gap-3 text-[11px] text-zinc-500 mt-1 font-mono">
                        <span>HR: {b.hr}</span>
                        <span>SpO2: {b.spo2}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-black border border-zinc-800/80 font-mono text-[11px]">
                  <div className="text-zinc-500 pb-1.5 mb-1.5 border-b border-zinc-800/60 flex items-center justify-between">
                    <span>Live EventSource Stream</span>
                    <span className="text-emerald-400">Connected</span>
                  </div>
                  <div className="space-y-1">
                    {telemetryEvents.map((e) => (
                      <div key={e.id} className="text-zinc-400 flex justify-between">
                        <span>{e.text}</span>
                        <span className="text-zinc-600">{e.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DEVTOGETHER SYNC */}
        {activeTab === 'collab' && (
          <div className="apple-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-white">DevTogether WebSocket Engine</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Concurrent pair programming with low-latency state synchronization.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                  <div className="text-zinc-500 text-[11px] uppercase font-mono mb-2">Connected Peers</div>
                  <div className="space-y-1.5">
                    {connectedPeers.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-zinc-300">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>{p}</span>
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">RTT ~18ms</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-500 space-y-1">
                  <div>• Sub-40ms bidirectional event broadcast</div>
                  <div>• Shared virtual execution container</div>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-xl bg-black border border-zinc-800/80 p-4 font-mono text-xs">
                <div className="text-zinc-500 pb-2 mb-2 border-b border-zinc-800/60 flex items-center justify-between text-[11px]">
                  <span>editor-session.js</span>
                  <span>WebSocket: Open</span>
                </div>
                <textarea
                  value={codeSnippet}
                  onChange={(e) => setCodeSnippet(e.target.value)}
                  rows={7}
                  className="w-full bg-transparent resize-none text-zinc-300 focus:outline-none font-mono text-xs leading-relaxed"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
