import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const axiosHTTP = rateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
  maxRPS: 0
});

export default axiosHTTP;
