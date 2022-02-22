const friendsDetails = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(json => friendsDetailsShow(json))
}

friendsDetails();

const friendsDetailsShow = (friendDetails) => {
    console.log(friendDetails);
    const friendsArray = friendDetails.results;
    const friendsDiv = document.getElementById('friends');
    for(const friend of friendsArray){
        const friendsInfo = document.createElement('blockquote');
        const hr = document.createElement('hr');
        friendsInfo.innerText = `
        Name: ${friend.name.first} ${friend.name.last}\n
        Email: ${friend.email}\n
        Gender: ${friend.gender}\n
        Country: ${friend.location.country}
        `;
        friendsDiv.appendChild(friendsInfo);
        friendsDiv.appendChild(hr);
    }
}