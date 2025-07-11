# 🛡️ External Reverse Proxy

Reverse proxy for the **public website** under `digital-mafia.co.za`.

Routes all requests to the marketing website or external landing pages.

---

## ✨ Features
- Reverse proxies static website frontend (Netlify, GH Pages, Vercel)
- Provides central point for adding blog, landing pages, etc.
- Built with Node.js, Express, and http-proxy-middleware

---

## 📦 Folder structure
````

external-reverse-proxy/
├── config/
│   └── proxies.js
├── .env
├── index.js
├── package.json
└── README.md

````

---

## ⚙️ Local development

```bash
git clone https://github.com/YOUR_USERNAME/external-reverse-proxy.git
cd external-reverse-proxy
npm install
npm start
````

Runs on:

```
http://localhost:5000
```

---

## 🧪 Example routes

| Path | Target site                                      |
| ---- | ------------------------------------------------ |
| `/`  | Landing website |
| ...                 | Add more as needed |

### Adding a route:  
In the module.exports dictionary at `config/proxies.js` add:
```
path: "/path-to-route",
middleware: createProxyMiddleware({
  target: process.env.TARGET_ROUTE_URL,
  changeOrigin: true,
}),
```
---

## 🌱 Environment variables (`.env`)

| Key  | Example | Purpose                              |
| ---- | ------- | ------------------------------------ |
| LANDING\_URL | `https://digital-mafia-solution.github.io/landing` | Client A Frontend target              |
| CUSTOMER\_INTAKE\_URL | `https://digital-mafia-solution.github.io/customer-intake` | Client B Frontend target              |
| PORT | `5000`  | Local port (Render overrides \$PORT) |

---

## ☁️ Deployment (Render.com)

1. Push to GitHub.
2. Create Render Web Service.
3. Build: `npm install`
4. Start: `npm start`
5. Add custom domain: `digital-mafia.co.za`.

---

## 🧠 License

MIT — Digital Mafia