const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = ''; 
    if(searchValue == ''){
        alert('Please enter a value');
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url) 
        .then(response => response.json())
        .then(json => displayFood(json.meals));
    }
}

const displayFood = (searchNish) => {
    const showFood = document.getElementById('show-food');
    showFood.innerHTML = '';
    for(const searchFood of searchNish){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${searchFood.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-title text-dark">${searchFood.strMeal}</h4>
                  <p class="card-text">${searchFood.strInstructions.slice(0,150) + 
                '...'}</p> 
                </div>
                <button onclick="moreDetails(${searchFood.idMeal})" class="w-50 m-3 details-btn"><a class="text-decoration-none text-dark" target="_blank" href="${searchFood.strYoutube}">Details</a></button>
            </div>
        `;
        showFood.appendChild(div);
    }
}
