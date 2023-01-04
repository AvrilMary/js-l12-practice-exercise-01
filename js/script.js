const randomFolks = document.querySelector(".random-peeps");
const selectionBox = document.querySelector(".num-users"); 
const selectUserNumber = document.querySelector("#users");


const getData = async function (numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    console.log(data)
    const usersResults = data.results;
    console.log(usersResults);
    displayUsers(usersResults);
}

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML= "";
    userResults.forEach(function (user) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name} </h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User Avatar"/>`
        randomFolks.append(userDiv);
    })
};

selectionBox.classList.remove("hide");

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);
})