const sportsdbLoad = () => {
    const searchInput = document.getElementById('search-player');
    const searchValue = searchInput.value;
    searchInput.value = '';
    if(searchValue == ''){
        alert('Please enter player name');
    }
    else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
        fetch(url)
        .then(response => response.json())
        .then(json => sportsdbDisplay(json.player));
    }
}

const sportsdbDisplay = players => {
    console.log(players);
    const containerDiv = document.getElementById('container');
    containerDiv.innerHTML = '';
    for(const player of players){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
                <p class="card-text">${player.strDescriptionEN.slice(0, 150)}</p>
            </div>
        </div>
        `;
        containerDiv.appendChild(div);
    }
}