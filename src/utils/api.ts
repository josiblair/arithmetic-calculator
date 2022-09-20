export default function request(reqParams) {
    const {payload, url, headers, method} = reqParams

    if(method === 'GET') {
        return fetch(url, {method, headers})
        .then((res) => {
            if(!res.ok) return Promise.reject(res);
            return res;
        })
    } else {
        return fetch(url, {body: JSON.stringify(payload), method, headers})
        .then((res) => {
            if(!res.ok) return Promise.reject(res);
            return res;
        })
    }
}