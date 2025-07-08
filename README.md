# Full-Stack Video Platform with Livestream

## Features
- Video upload and channel management with Firebase Storage and Firestore
- User authentication with Firebase Auth (to be added)
- Livestream embed with Owncast or Nginx RTMP HLS URL
- Modern React frontend with Tailwind CSS
- Optional backend Express server for custom APIs

## Setup

### 1. Install dependencies

\`\`\`bash
cd frontend && npm install
cd ../backend && npm install
\`\`\`

### 2. Configure Firebase

Replace the placeholders in `frontend/src/firebaseConfig.ts` with your Firebase project configuration.

### 3. Run locally

Frontend:

\`\`\`bash
cd frontend
npm start
\`\`\`

Backend (optional):

\`\`\`bash
cd backend
node server.js
\`\`\`

### 4. Livestream setup

- Deploy Owncast (https://owncast.online/docs/quickstart/) or Nginx RTMP server
- Update the livestream URL in `frontend/src/components/LivestreamEmbed.tsx`

### 5. Deployment

- Deploy frontend to Vercel, Netlify, or Firebase Hosting
- Deploy backend to VPS or serverless platform if needed

## Notes

- Firebase Auth integration can be added for user authentication
- Customize styling and features as needed
