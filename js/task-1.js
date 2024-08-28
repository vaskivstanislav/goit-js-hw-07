const categories = document.querySelectorAll('li.item');
const categoriesLength = categories.length;
console.log("Number of categories:", categoriesLength);


categories.forEach(element => {
    const categoriesTitle = element.querySelector('h2').textContent;

    const elementsCount = element.querySelectorAll("ul>li").length;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${elementsCount}`);
})