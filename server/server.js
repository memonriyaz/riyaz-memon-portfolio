import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/riyaz_portfolio';

// Middlewares
app.use(cors());
app.use(express.json());

// In-memory fallback message store for when MongoDB is not yet running
const inMemoryMessages = [];

// Connect to MongoDB with graceful fallback
let isDbConnected = false;
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 2500
}).then(() => {
  isDbConnected = true;
  console.log('✅ Connected to MongoDB successfully.');
}).catch((err) => {
  console.log('⚠️ MongoDB not running locally. Operating in resilient In-Memory / Simulated mode.');
});

// Resume Data & Projects
const projectsData = [
  {
    id: 'wardwatch',
    title: 'WardWatch Clinical System',
    category: 'MERN Stack & Real-Time',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'SSE', 'JWT', 'RBAC'],
    description: 'A scalable MERN-stack ward management system with responsive Tailwind CSS interfaces, real-time SSE-based bed and status updates, and secure JWT authentication with Role-Based Access Control (RBAC) for doctor, nurse, and admin dashboards.',
    highlights: [
      'Server-Sent Events (SSE) for low-latency bed status stream',
      'Role-Based Access Control (RBAC) with granular permissions for doctors, nurses, and hospital administrators',
      'Encrypted JWT authentication and audit trails',
      'Automated patient triage and real-time vital metrics tracking'
    ],
    github: 'https://github.com/memonriyaz',
    demo: '#demo-wardwatch'
  },
  {
    id: 'reserve',
    title: 'ReServe – Food Redistribution Platform',
    category: 'Full-Stack & Cloud',
    tags: ['Next.js', 'Supabase', 'Google Cloud', 'AI Prediction', 'Google Maps API'],
    description: 'A full-stack web platform connecting restaurants with NGOs via AI-based food safety prediction and Google Maps API integration; selected among the Top 105 projects nationally in Google Solution Challenge 2025.',
    highlights: [
      'Top 105 Nationally in Google Solution Challenge 2025',
      'AI-based shelf-life & food safety prediction algorithm',
      'Dynamic routing and dispatching via Google Maps API',
      'Real-time donor-to-NGO matching reducing food wastage'
    ],
    github: 'https://github.com/memonriyaz',
    demo: '#demo-reserve'
  },
  {
    id: 'devtogether',
    title: 'DevTogether – Collaborative Coding Platform',
    category: 'Real-Time & WebSockets',
    tags: ['React.js', 'Node.js', 'WebSockets', 'Shared Terminal', 'Code Editor'],
    description: 'Built a real-time collaborative coding platform with a shared terminal, live chat, and WebSocket-based state synchronization, enabling concurrent multi-user editing and execution with low-latency performance.',
    highlights: [
      'Bidirectional WebSocket synchronization with operational conflict resolution',
      'Remote shared terminal execution container',
      'Multi-room low latency voice/chat channels',
      'Sub-50ms peer-to-peer event propagation'
    ],
    github: 'https://github.com/memonriyaz',
    demo: '#demo-devtogether'
  },
  {
    id: 'edviron-fintech',
    title: 'Edviron Production Fintech Engine',
    category: 'Fintech & Payments',
    tags: ['NestJS', 'TypeScript', 'MongoDB', 'Razorpay', 'Cashfree', 'Easebuzz', 'GraphQL', 'React.js'],
    description: 'Production payment & subscription engine integrating Razorpay, Cashfree, and Easebuzz with automated cryptographic webhook verification, ledger idempotency, and React.js monitoring dashboards.',
    highlights: [
      'Zero double-charge idempotency guarantee with distributed locking',
      'Multi-gateway smart fallback routing between Razorpay, Cashfree & Easebuzz',
      'GraphQL queries reducing frontend payload size by 45%',
      'Handled high-volume school fee collection and subscription workflows'
    ],
    github: 'https://github.com/memonriyaz',
    demo: '#demo-fintech'
  }
];

// Routes
// 1. Health check & system status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    engineer: 'Riyaz Memon',
    role: 'Software Engineer | Full Stack Developer',
    database: isDbConnected ? 'MongoDB (Connected)' : 'In-Memory Resilient Store',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 2. Projects list
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

// 3. Portfolio stats
app.get('/api/stats', (req, res) => {
  res.json({
    cgpa: 9.3,
    nationalRank: 'Top 105 Google Solution Challenge',
    paymentGateways: ['Razorpay', 'Cashfree', 'Easebuzz'],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'NestJS'],
    messagesCount: inMemoryMessages.length
  });
});

// 4. Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide name, email, and message.' 
      });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    inMemoryMessages.push(newMessage);

    console.log(`📩 New message received from ${name} (${email}): ${message.slice(0, 50)}...`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out, Riyaz has received your message!',
      data: newMessage
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// 5. Interactive Payment Gateway & Webhook Simulator (Showcasing Edviron Fintech experience)
app.post('/api/simulate-payment', (req, res) => {
  const { gateway = 'razorpay', amount = 1500, customerName = 'Recruiter / Visitor' } = req.body;
  const orderId = `order_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const paymentId = `pay_${Math.random().toString(36).substring(2, 11)}`;
  const signature = `sha256_${Math.random().toString(36).substring(2, 15)}`;

  // Simulated 4-stage Fintech transaction lifecycle
  res.json({
    status: 'COMPLETED',
    gateway: gateway.toUpperCase(),
    orderId,
    paymentId,
    signature,
    amount,
    currency: 'INR',
    customer: customerName,
    lifecycle: [
      { step: 1, title: 'Payload Validation', detail: 'Strict Zod/DTO validation for amounts & idempotency key', status: 'SUCCESS' },
      { step: 2, title: `${gateway.toUpperCase()} Session Handshake`, detail: 'Secured order creation via official gateway REST API', status: 'SUCCESS' },
      { step: 3, title: 'Cryptographic Webhook Verification', detail: 'HMAC SHA256 checksum matched against gateway secret', status: 'SUCCESS' },
      { step: 4, title: 'MongoDB Ledger Commitment', detail: 'Atomic transaction update: account balance & audit log committed', status: 'SUCCESS' }
    ],
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Riyaz Memon Portfolio Backend running at http://localhost:${PORT}`);
});
