export function checkAuth() {
  const path = window.location.pathname;
  const base = import.meta.env.BASE_URL;

  //  permitir login sin bloqueos
  const returnToLogin = `${base}/login`;
  if (path === returnToLogin) return true;

  const authRaw = localStorage.getItem('auth');
  if (!authRaw) {
    window.location.href = returnToLogin;
    return false;
  }

  let auth;
  try {
    auth = JSON.parse(authRaw);
  } catch (e) {
    localStorage.removeItem('auth');
    window.location.href = returnToLogin;
    return false;
  }

  const ONE_DAY = 1000 * 60 * 60 * 24;

  if (!auth.createdAt || Date.now() - auth.createdAt > ONE_DAY) {
    localStorage.removeItem('auth');
    window.location.href = returnToLogin;
    return false;
  }

  return true;
}
