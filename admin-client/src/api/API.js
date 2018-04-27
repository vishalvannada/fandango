const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

//checklogin
export const check = () =>
    fetch(`${api}/ad/check`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        //body: JSON.stringify(payload)
    }).then(res => {
        //console.log(res.json());
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
});
