import requestIp from 'request-ip'

export default function handler(req, res) {
  res.status(200).json({ ip: requestIp.getClientIp(req) });
}
