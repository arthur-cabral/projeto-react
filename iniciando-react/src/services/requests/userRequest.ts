import { AxiosInstance } from 'axios';

export const usuario = (api: AxiosInstance, url: string) => (
  {
    usuario: {
      getUser: () => api.get(url),
      getUserByEmail: (email: string) => api.get(`${url}/${email}`),
      register: (data: Object) => api.post(`${url}/register`, data),
      login: (data: Object) => api.post(`${url}/login`, data),
      // put: (url, id, data) => api.put(`${url}/${id}`, data),
      // delete: (url, id) => api.delete(`${url}/${id}`),
    }
  });