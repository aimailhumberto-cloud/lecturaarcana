/**
 * Club de Lectura Arcana — Configuración centralizada
 * 
 * En desarrollo: usa localhost (valores por defecto)
 * En producción: usa las URLs de Render (definidas en .env.production)
 */

/** URL del backend API (BiblioVault-AI server) */
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/** URL de la aplicación/biblioteca (BiblioVault-AI frontend) */
export const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:5173';
