const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function elementsOfIngridients(vegetables){
  const list = document.querySelector('#ingredients');
  const newVeges = vegetables.map(vegetable => {
    const liVeges = document.createElement('li');
    liVeges.textContent = vegetable;
    liVeges.classList.add('item');
    list.append(liVeges)
  });
  return newVeges
}

elementsOfIngridients(ingredients)