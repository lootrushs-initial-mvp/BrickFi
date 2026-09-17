function sanitizeUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name || null,
    role: user.role || 'user',
    user_metadata: { name: user.name || null }
  };
}

module.exports = { sanitizeUser };
