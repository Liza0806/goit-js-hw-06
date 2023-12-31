const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('ul');
gallery.style.display = "flex";
gallery.style.listStyle = "none";
gallery.style.gap = "20px";

let galleryItems = ''; 

function createLi(item, height) {
  return `<li>
    <img class="img-class" src="${item.url}" alt="${item.alt}" height="${height}" />
  </li>`;
}


function renderImages(gallery) {
  if (!gallery) return;
  for (let i = 0; i < images.length; i++) {
    galleryItems += createLi(images[i], 320);
  }
  gallery.insertAdjacentHTML('afterBegin', galleryItems);
}

renderImages(gallery);
