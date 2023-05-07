// const btn = document.querySelector('.see-more');
// const cards = Array.from(document.querySelectorAll('.books-all-item'))

// function openCatalog() {
//     btn.addEventListener('click', () => {
//         cards.forEach(item => item.classList.remove('hidden'));
        
//     })
// }

// function response1() {
//     if(window.innerWidth > 1439) {
//         cards.forEach((item, index) =>{
//             item.classList.add('hidden')
//             if (index <= 4) {
//                 item.classList.remove('hidden')
//             } 
//             openCatalog()
//         })
//     }
// }


// ===== Отримання даних із сервера та створення динамічної розмітки =====

import { Notify } from 'notiflix';
import { BookAPI } from './api';
const bookApi = new BookAPI();

export async function renderSectionBooksAll() {
  const backEndData = await booksAllGetFromBackend();
  const markup = booksAllCreateMarkup(backEndData);
  document.querySelector('.books-content').innerHTML = markup;
}

async function booksAllGetFromBackend() {
  return await bookApi.getTopBooks();
}

function booksAllCreateMarkup(backEndCategories) {
  let markup = '';
  markup += `
    <h2 class="books-all-title">Best Sellers <span class="colortext">Books</span></h2>
  `;
  markup += backEndCategories.map(booksAllCreateOneCategory).join('');
  return markup;
}

function booksAllCreateOneCategory(bookCategory) {
  return `
    <h3 class="books-all-menu">${bookCategory.list_name}</h3>
    <ul class="books-all">
      <li class="books-all-item">
            <img class="books-all-image" src="${bookCategory.books[0].book_image}" alt="${bookCategory.books[0].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[0].title}</p>
              <p class="info-detail-item">${bookCategory.books[0].author}</p>
            </div>
            </a>
          </li>
      <li class="books-all-item">
            <img class="books-all-image" src="${bookCategory.books[1].book_image}" alt="${bookCategory.books[1].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[1].title}</p>
              <p class="info-detail-item">${bookCategory.books[1].author}</p>
            </div>
          </li>
      <li class="books-all-item">
            <img class="books-all-image" src="${bookCategory.books[2].book_image}" alt="${bookCategory.books[2].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[2].title}</p>
              <p class="info-detail-item">${bookCategory.books[2].author}</p>
            </div>
          </li>
        <li class="books-all-item">
            <img class="books-all-image" src="${bookCategory.books[3].book_image}" alt="${bookCategory.books[3].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[3].title}</p>
              <p class="info-detail-item">${bookCategory.books[3].author}</p>
            </div>
        </li>
        <li class="books-all-item">
          <div class="books-all-overlay">
            <img class="books-all-image" src="${bookCategory.books[4].book_image}" alt="${bookCategory.books[4].title}" loading="lazy">
            <p class="overlay">QUICK VIEW</p>
          </div>  
            <div class="books-info">
              <p class="info-item">${bookCategory.books[4].title}</p>
              <p class="info-detail-item">${bookCategory.books[4].author}</p>
            </div>
          </li>
        </ul>
        <div class="loading">
          <button class="see-more" type="button">SEE MORE</button>
        </div>
      </li>
    </ul>
  `;
}

// Перевірка роботи
renderSectionBooksAll();

// ===== Кінець блоку отримання даних із сервера та створення динамічної розмітки =====
