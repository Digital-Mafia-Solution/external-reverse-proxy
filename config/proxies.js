const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = [
  {
    path: "/",
    middleware: createProxyMiddleware({
      target: process.env.LANDING_URL,
      changeOrigin: true,
    }),
  },
];
