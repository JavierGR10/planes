export function checkAuth() {
  const path = window.location.pathname;
  const base = import.meta.env.BASE_URL;

  //  permitir login sin bloqueos
  const returnToLogin = `${base}/login`;
  if (path.includes(returnToLogin)) return true;

  const authRaw = localStorage.getItem('auth-microsites');
  if (!authRaw) {
    window.location.href = returnToLogin;
    return false;
  }

  let auth;
  try {
    auth = JSON.parse(authRaw);
  } catch (e) {
    localStorage.removeItem('auth-microsites');
    window.location.href = returnToLogin;
    return false;
  }

  const ONE_DAY = 1000 * 60 * 60 * 24;

  if (!auth.createdAt || Date.now() - auth.createdAt > ONE_DAY) {
    localStorage.removeItem('auth-microsites');
    window.location.href = returnToLogin;
    return false;
  }

  return true;
}

import Swal from 'sweetalert2';

export function handleLogin() {
  const form = document.querySelector<HTMLFormElement>('#login-form');
  const buttonShowPassword = document.querySelector<HTMLButtonElement>('#button-show-password');
  const inputPassword = document.querySelector<HTMLInputElement>('#password');

  if (buttonShowPassword && inputPassword) {
    buttonShowPassword.addEventListener('click', () => {
      const isPassword = inputPassword?.type === 'password';
      inputPassword.type = isPassword ? 'text' : 'password';
      buttonShowPassword.innerHTML = isPassword
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 14.5a4.5 4.5 0 1 1 4.5-4.5a4.5 4.5 0 0 1-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7s10-7 10-7s-3-7-10-7"/><circle cx="10" cy="10" r="2.5" fill="currentColor"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M12.49 9.94A2.5 2.5 0 0 0 10 7.5z"/><path fill="currentColor" d="M8.2 5.9a4.4 4.4 0 0 1 1.8-.4a4.5 4.5 0 0 1 4.5 4.5a4.3 4.3 0 0 1-.29 1.55L17 14.14A14 14 0 0 0 20 10s-3-7-10-7a9.6 9.6 0 0 0-4 .85zM2 2L1 3l2.55 2.4A13.9 13.9 0 0 0 0 10s3 7 10 7a9.7 9.7 0 0 0 4.64-1.16L18 19l1-1zm8 12.5A4.5 4.5 0 0 1 5.5 10a4.45 4.45 0 0 1 .6-2.2l1.53 1.44a2.5 2.5 0 0 0-.13.76a2.49 2.49 0 0 0 3.41 2.32l1.54 1.45a4.47 4.47 0 0 1-2.45.73"/></svg>';
    });
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const user = formData.get('user');
    const password = formData.get('password');

    const userData = {
      user: import.meta.env.PUBLIC_ADMIN_USER,
      password: import.meta.env.PUBLIC_ADMIN_PASSWORD,
    };

    if (user === userData.user && password === userData.password) {
      const sessionToken = crypto.randomUUID();
      const session = {
        token: sessionToken,
        createdAt: Date.now(),
      };
      localStorage.setItem('auth-microsites', JSON.stringify(session));
      window.location.href = '/planes';
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  });
}
