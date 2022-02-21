function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function usersLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userDisplay(json))
}

function postLoad(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => postDisplay(json))
}

function userDisplay(json){
    const orderedList = document.getElementById('users');
    for(const user of json){
        const list = document.createElement('li');
        list.innerText = `Name: ${user.name}\n Email: ${user.email}`;
        orderedList.appendChild(list);
    }
}

function postDisplay(json){
    const unorderedList = document.getElementById('posts');
    for(const post of json){
        const list = document.createElement('li');
        list.innerText = post.title;
        unorderedList.appendChild(list);
    }
}

function photoLoad(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => displayPhoto(json))
}

function displayPhoto(data){
    const photos = document.getElementById('photos');
    for(const photo of data){
        const photo = document.createElement('img');
        photo.src = data.url;
        photos.appendChild(photo);
    }
}