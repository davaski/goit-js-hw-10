export const createOptions = data =>
  data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');

export const createMarkap = ({ url, breeds }) =>
  `<div class="block"><img src="${url}" alt="${breeds[0].name}" width="500"/><div class="container"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p>Temperament: ${breeds[0].temperament}</p></div></div>`;
