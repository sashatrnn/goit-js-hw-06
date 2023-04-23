const categoryList = [...document.querySelectorAll('.item')];
console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach((category) => {
    const title = category.querySelector('h2');
    const numElements = category.querySelector('ul');
    console.log(`
    Category: ${title.textContent} 
    Elements ${numElements.childElementCount}`)
}
)