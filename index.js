'use strict';
 
const button = document.querySelector('.button');
const quote = document.querySelector('.quote');
 
const getJoke = () => {
 
    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(json => {
    // console.log(json);
    quote.innerHTML = `<img src="${json.icon_url}" alt="chuck-norris-joke" />`
    quote.innerHTML += json.value;
    });
 
}
 
button.addEventListener('click', getJoke);
