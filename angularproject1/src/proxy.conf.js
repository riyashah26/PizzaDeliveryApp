const PROXY_CONFIG = [
  {
    context: [
      "/home",
      "/loginDetails"
    ],
    target: "https://localhost:7021",
    "secure": true,
    "changeOrigin": true
  }
]

module.exports = PROXY_CONFIG;
