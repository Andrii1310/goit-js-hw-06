const itemsRef = document.querySelectorAll('.item h2');
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(h2 => {
    console.log(`Category: ${h2.innerHTML}`);
    console.log(`Elements: ${h2.nextElementSibling.children.length}`);
});

