let nickname = document.getElementById('nickname');
let favorites = document.getElementById('favorites');
let hometown = document.getElementById('hometown');
let listItem = document.getElementsByTagName('li');

//Change the body style
document.body.style.fontFamily = 'Arical, sans-serif';

//Change my own information
nickname.textContent = "Bao Van Viet";
favorites.textContent = "Play Game";
hometown.textContent = "Quang Tri";

//Change the class and color for li tag
for(let i = 0; i < listItem.length; i++) {
  listItem[i].className = 'listitem';
  listItem[i].style.color = 'red';
}

//Create image
let img = document.createElement('img');
img.src = 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/DOM_social01.png?1516135595'

document.body.appendChild(img);
