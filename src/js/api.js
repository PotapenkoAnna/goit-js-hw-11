import axios from 'axios';

const API_KEY = '38951602-28f9062c7efd02f2b96d1092a';
const URL = 'https://pixabay.com/api/';  

async function fetchImages(query, page, perPage) {
  const params = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
    query: query,
  });

  const response = await axios.get(`${URL}?key=${API_KEY}&${params}`);
  return response.data;
}

export { fetchImages };