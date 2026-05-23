import request from './request';

const authService = {
  login: (data) => request.post('auth/login', new URLSearchParams(data), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }),
  logout: (data) => request.post('auth/logout', new URLSearchParams(data), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }),
};

export default authService;
