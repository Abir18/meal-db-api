const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const colorSpinner = document.getElementsByClassName('color-spinner');

// Display All Foods
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then(res => res.json())
  .then(data => {
    for (const cs of colorSpinner) {
      cs.classList.remove('d-none');
    }
    console.log('spinner start');

    // displayFood(data);

    setTimeout(() => {
      displayFood(data);
    }, 2000);
  });

const displayFood = foods => {
  for (const cs of colorSpinner) {
    cs.classList.add('d-none');
  }
  console.log('spinner stop');

  const foodItems = foods.meals;
  foodItems.forEach(food => {
    // console.log(food);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${food.strMeal}</h4>
            <p class="card-text text-secondary">
              ${food.strInstructions.slice(0, 200)}
            </p>
        </div>
        </div>           
    `;
    searchResult.appendChild(div);
  });
};

// Display Search Foods
searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value;
  if (searchValue === '') {
    searchResult.innerHTML = `
      <div class="d-flex justify-content-center">
        <h3>Please Enter a Food Item</h3>
      </div>
      `;

    return;
  }
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      for (const cs of colorSpinner) {
        cs.classList.remove('d-none');
      }
      console.log('spinner start');

      // displayFood(data);

      setTimeout(() => {
        displayFood(data);
      }, 500);
    });
  searchInput.value = '';
  searchResult.innerText = '';
});

const searchFood = foods => {
  //   console.log(foods.meals);
  const foodItems = foods.meals;
  foodItems.forEach(food => {
    // console.log(food);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${food.strMeal}</h4>
            <p class="card-text text-secondary">${food.strInstructions.slice(
              0,
              200
            )}</p>
        </div>
        </div>           
    `;
    searchResult.appendChild(div);
  });
  for (const cs of colorSpinner) {
    cs.classList.add('d-none');
  }
  console.log('spinner stop');
};
