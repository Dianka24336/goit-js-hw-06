//1

// const itemsEl = document.querySelectorAll('.item');
// console.log('Number of categories:', itemsEl.length);

// itemsEl.forEach(item => {
//     const titleEl = item.querySelector('h2');
//     console.log('Category:', item.querySelector('h2').textContent);
//     console.log('Elements:', item.querySelectorAll('li').length);
// });


//2

// const ulEl = document.getElementById('categories');
// const itemsEl = document.querySelectorAll('.item');

// console.log('Number of categories:', ulEl.children.length);

// itemsEl.forEach(item =>{
//     console.log('Category:', item.firstElementChild.textContent);
//     console.log('Elements:', item.lastElementChild.children.length)
// });

//3

const ulEl = document.getElementById('categories');
const titleEl = document.querySelectorAll('h2');

console.log('Number of categories:', ulEl.children.length);

titleEl.forEach(title =>{
    console.log('Category:', title.textContent);
    console.log('Elements:', title.nextElementSibling.children.length)
});