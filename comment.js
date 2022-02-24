const commentLoad = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => commentDisplay(json));
}

const commentDisplay = (comments) => {
    const containerDiv = document.getElementById('container');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${comment.name}</h2>
        <h4>${comment.body}</h4>
        `;
        containerDiv.appendChild(div);
    }
}