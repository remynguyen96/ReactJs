const url = 'http://localhost:4500/api';
export const getProductsApi = async () => {
  const listProducts = await fetch(`${url}/products`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return listProducts
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

export const addProductsApi = async () => {

};

export const editProductsApi = async () => {

};

export const deleteProductsApi = async () => {

};

