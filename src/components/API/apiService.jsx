import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '937968fc5e907db2565b1416fc4a5859';

export const fetchTrends = async () => {
    const response  = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};


export const fetchTrendsDetails = async (id) => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data
}


export const fetchCastInfo = async (id) => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data.cast
}

export const fetchReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};


export const movieSeach = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response.data.results;
};