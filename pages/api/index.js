export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ methd: req.method })
  } else if (req.method === 'POST') {
    res.status(200).json({ methd: req.method })
  }
}
