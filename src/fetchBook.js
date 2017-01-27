const defaultInit = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};
const urlApi = "https://opendata.paris.fr/api/records/1.0/search/?dataset=les-titres-les-plus-pretes";

export function getAll(page, init = defaultInit) {
  return fetch(urlApi, init).then(response => response.json());
}

export function getOne(id, init = defaultInit) {
  return fetch(`${urlApi}&q=recordid%3D${id}`, init).then(response => response.json());
}
