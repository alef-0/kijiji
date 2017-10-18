import devStore from './configureStore.dev';

let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = require('./configureStore.prod');
} else {
  loadedStore = devStore;
}

export const store = loadedStore();
