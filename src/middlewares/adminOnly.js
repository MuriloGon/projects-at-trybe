function adminOnly(req, res, next) {
  const { role } = req.user;
  if (role !== 'admin') {
    const message = 'Only admins can register new admins';
    return res.status(403).json({ message });
  }
  return next();
}

module.exports = adminOnly;