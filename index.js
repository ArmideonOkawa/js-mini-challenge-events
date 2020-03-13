/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/
/***** Start of my Code ****/

//Elements
const pList = document.querySelector(".player-container")
const newPlayer = document.querySelector("#new-player-form")
/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
 }

 header.addEventListener('click', e => {
  toggleColor(document.querySelector("h1#header"))
 })

/***** Deliverable 2 *****/

/***** Deliverable 3 *****/

// function parseString(string){
//   const str  = document.querySelector(".likes").innerHTML
//   const strSplit = str.split(" ");
//   const pstr = parseInt(strSplit);
//   const num = pstr + 1;
//   return num;
// }
pList.addEventListener('click', e => {
  // debugger
  if (e.target.className === "like-button"){
    let likeCount = parseInt(event.target.previousElementSibling.textContent) + 1
    event.target.previousElementSibling.textContent = `${likeCount} likes`
  }
})

// const like = document.querySelector(".like-button")

// like.addEventListener('click', event => {
// console.log("button-clicked")
// alert("this event works")
  //const strSplit = string.split(" ");

  //const newLocal = parseInt(strSplit, [0] + 1);

// })
/*****CONSOLE TESTS*****/
// string.split(" ")
// (2) ["1000", "likes"]
// let strArr = string.split(" ")

// strArr
// (2) ["1000", "likes"]
// strArr[0]
// "1000"
// parseInt(strArr, [0])
// 1000
// parseInt(strArr, [0]) + 1
// 1001