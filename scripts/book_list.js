const books = [
  {title: 'The Design of EveryDay Things',
   img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
   img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
   author: 'Brian Christian',
   alreadyRead: true
  }];

let listBook = document.createElement('ul');
document.body.appendChild(listBook);

//Create book item
function bookItem(content, imgUrl, alreadyRead){
  let listItem = document.createElement('li');
  let bookContent = document.createElement('p');
  let bookImg = document.createElement('img');

  bookContent.textContent = content;
  bookImg.src = imgUrl;
  if(alreadyRead) bookContent.style.color = 'green';

  listItem.appendChild(bookContent);
  listItem.appendChild(bookImg);
  listBook.appendChild(listItem);
}

//Show list book
books.forEach((e) => {
  let content = `${e.title} by ${e.author}`;
  bookItem(content, e.img, e.alreadyRead);
});
