const url = 'https://api.thecatapi.com/v1/images/search';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}

document.querySelector('.btn').addEventListener('click', () => {
    sendRequest('GET', url)
    .then(data => {
        document.querySelector('.image').src = data[0].url;
    });
});