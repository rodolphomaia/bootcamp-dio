const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const changeCatBtn = document.querySelector('#changeCatBtn');
const catImg = document.querySelector('#catImg');

async function getCat() {
    const data = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e))

    catImg.src = data.webpurl
}

changeCatBtn.addEventListener('click', getCat);

getCat();