
const urlApi = 'http://localhost:4500/api';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
);

const fetchApi = async ({url, method = 'GET', body = null, header}) => {
   try {
       const headers = new Headers({
           'Content-Type': 'application/json',
       });
       header ? headers.append(header) : null;
       const getApi = await fetch(`${urlApi}/${url}`, { method, body, headers });
       return getApi.json();
   } catch (err) {
        throw new Error(err);
   }
};

const saveLocal = (tokenKey, token) => window && window.localStorage && window.localStorage.setItem(tokenKey, token);

const getLocal = (tokenKey) => window && window.localStorage && window.localStorage.getItem(tokenKey);

const clearLocal = (tokenKey) => window && window.localStorage && window.localStorage.removeItem(tokenKey);

export {
    urlApi,
    fetchApi,
    saveLocal,
    getLocal,
    clearLocal,
}

