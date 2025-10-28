// api.js
export default async function handler(req, res) {
  const url = process.env.TARGET || "https://soporte-swkq.vercel.app/";
  // Si entras a /r/loquesea → te redirige al TARGET
  res.writeHead(302, { Location: url });
  res.end();
}
