const url = 'http://localhost:4100';

export const menuApi = async () => {
    const res = await fetch(`${url}/menu`, {
        method: 'GET',
        headers: new Headers({'Content-Type':'application/json'})
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return res;
}

export const loginApi = async (data) => {
    const res = await fetch(`${url}/auth`, {
        method: 'POST',
        body: data,
        headers: new Headers({'Content-Type':'application/json'})
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    return res;
}
