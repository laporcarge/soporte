export default async function handler(req, res) {
  const url = process.env.TARGET || "https://soporte-swkq.vercel.app/";
  res.writeHead(302, { Location: url });
  res.end();
}
