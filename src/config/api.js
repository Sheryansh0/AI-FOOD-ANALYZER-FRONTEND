// API Configuration
const getApiUrl = () => {
  // Production uses Vercel proxy, development uses direct connection
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    return '/api'; // Vercel proxy will route to Azure backend
  }
  
  // Development - direct connection to Azure backend
  return 'http://food-analyzer-backend-sea.southeastasia.azurecontainer.io:8000';
};

export const API_BASE_URL = getApiUrl();
export const API_ENDPOINTS = {
  health: `${API_BASE_URL}/api/health`,
  analyze: `${API_BASE_URL}/api/analyze`,
};