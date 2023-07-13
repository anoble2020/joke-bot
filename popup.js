document.addEventListener('DOMContentLoaded', getJoke);

function getJoke() {
const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    // Handle the response from the API
    document.getElementById('setup').innerHTML = data.setup;
    document.getElementById('punchline').innerHTML = `<i>${data.punchline}</i>`;
    console.log('Joke:', data.setup);
    console.log('Punchline:', data.punchline);
    // Further processing of the joke data
    })
    .catch(error => {
    console.error('Error:', error);
    // Handle the error
    });
}
