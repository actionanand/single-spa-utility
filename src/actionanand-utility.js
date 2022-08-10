// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from 'rxjs';

let rxjxData = '';

const apiCache = new Map();
// Anything exported from this file is importable by other in-browser modules.
export function getData(url) {
  const data = apiCache.get(url);
  if (data) {
    console.log('cached api');
    return Promise.resolve(data);
  }
  return new Promise((resolve) => {
    // API Mock
    setTimeout(() => {
      const apiResponse = {
        result: 10,
      };
      apiCache.set(url, apiResponse);
      console.log('actual api');
      resolve(apiResponse);
    }, 2000);
  });
}

export const state$ = new BehaviorSubject({data: rxjxData});

window.addEventListener('vanilla', (evnt) => {
  const fields = ['detail'];
  console.log(evnt);
  console.log(evnt[fields[0]]);
  // rxjxData = evnt[fields[0]];
  // state$.next({data: rxjxData});
});