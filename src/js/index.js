import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createOptions, createMarkap } from './markap';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  selected: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  errorParagraph: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(({ data }) => {
    const options = createOptions(data);
    refs.selected.innerHTML = options;
    refs.loader.classList.add('is-hidden');
    new SlimSelect({
      select: refs.selected,
    });
    refs.selected.classList.remove('is-hidden');
  })
  .catch(error => {
    refs.errorParagraph.classList('is-hidden');
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  })
  .finally(() => {
    refs.loader.classList.add('is-hidden');
  });

const onSelect = event => {
  event.preventDefault();

  const breedId = event.target.value;

  refs.loader.classList.remove('is-hidden');

  fetchCatByBreed(breedId)
    .then(response => {
      const markap = createMarkap(response.data[0]);
      console.log(markap);
      refs.info.innerHTML = markap;
    })

    .catch(error => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};

refs.selected.addEventListener('change', onSelect);
