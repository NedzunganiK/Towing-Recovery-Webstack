import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.towingandrecovery.com', // Replace with your actual backend URL
  timeout: 5000,
});

export const getServices = async () => {
  try {
    const response = await apiClient.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const submitServiceRequest = async (requestData) => {
  try {
    const response = await apiClient.post('/service-request', requestData);
    return response.data;
  } catch (error) {
    console.error('Error submitting service request:', error);
    throw error;
  }
};
