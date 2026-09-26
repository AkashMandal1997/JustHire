# JustHire

JustHire is a full-stack job search and recruitment application built with React, Vite, Express, MongoDB, Cloudinary, and Redux Toolkit.

## Project structure

- `frontend`: React/Vite client, deployed to Vercel
- `backend`: Express API, deployed to Render

## Local development

1. Install dependencies:

   ```sh
   cd backend && npm ci
   cd ../frontend && npm ci
   ```

2. Create `backend/.env` from `backend/.env.example` and `frontend/.env` from `frontend/.env.example`.
3. Start the API in one terminal:

   ```sh
   cd backend
   npm run dev
   ```

4. Start the client in another terminal:

   ```sh
   cd frontend
   npm run dev
   ```

## Deployment

### Backend on Render

The root `render.yaml` defines the service. Render uses `backend` as the root directory, runs `npm ci`, starts with `npm start`, and checks `/health`.

Set these Render environment variables:

- `NODE_ENV=production`
- `CLIENT_URL=https://<your-vercel-domain>`
- `MONGO_URI`
- `SECRET_KEY`
- `CLOUD_NAME`
- `API_KEY`
- `API_SECRET`

### Frontend on Vercel

Import this repository into Vercel with `frontend` as the project root. Vercel detects Vite automatically; the build command is `npm run build` and the output directory is `dist`.

Set this Vercel environment variable:

- `VITE_API_BASE_URL=https://<your-render-service>.onrender.com`

The `frontend/vercel.json` rewrite keeps React Router routes working when opened directly.

## Checks

```sh
cd frontend
npm run build
npm run lint
```

The backend has no automated test suite yet; `GET /health` is the deployment smoke check.
