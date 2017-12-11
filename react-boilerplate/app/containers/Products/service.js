import {urlServer} from 'utils/helper';
const urlApi = `${urlServer}/api/products`;
export const getProductsApi = async () => {
  const listProducts = await fetch(`${urlApi}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then((res) => res.json())
    .catch((err) => {
      throw err;
    });
  return listProducts;
};

export const addProductsApi = async (product) => {
    let formData = new FormData();
    for(let [key, val] of Object.entries(product)) {
      formData.append(key, val);
    }
    const addProducts = await fetch(`${urlApi}/add`, {
      method: 'post',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
      },
      body: formData,
    })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
    return addProducts;
};

export const editProductsApi = async () => {

};

export const deleteProductsApi = async () => {

};

