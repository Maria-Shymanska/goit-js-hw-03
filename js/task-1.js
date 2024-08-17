function slugify(title) {
    return title
        .toLowerCase() // Перетворює всі літери на нижній регістр
        .trim() // Видаляє пробіли з початку і кінця рядка
        .replace(/\s+/g, '-'); // Замінює один або більше пробілів на тире
    }

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
