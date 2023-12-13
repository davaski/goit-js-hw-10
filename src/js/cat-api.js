import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_lW7UezkBCg9JofZD933xwutVFgWhI2h0fpkiZCEQ7bWrWhU2fqjlAvbAUXUbsEtO';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  const END_POINT = '/breeds';
  const url = `${BASE_URL}${END_POINT}`;
  return axios.get(url);
}

export function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search';
  const PARAMS = new URLSearchParams({ breed_ids: breedId });
  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
  return axios.get(url);
}
