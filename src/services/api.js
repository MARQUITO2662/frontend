// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // Reemplaza con la URL de tu backend
  timeout: 5000,  // Tiempo máximo de espera para cada solicitud
});

export default api;
