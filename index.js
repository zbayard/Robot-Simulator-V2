document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();

  // ADD CODE HERE!
  const moveList = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

  // add moves
  document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
      const parsedKey = event.key.slice(5).toLowerCase() // "ArrowUp" => "up"

      const li = document.createElement("li")
      li.textContent = parsedKey
      moveList.append(li)
    }
  })

  // delete moves
  moveList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })

  // run moves
  moveButton.addEventListener("click", () => {
    const nextMoveLi = moveList.querySelector("li") // get the 1st li in the list
    move(nextMoveLi.textContent) // move the robot
    nextMoveLi.remove() // remove the li
  })

  // bonus!
  // moveButton.addEventListener("click", () => {
  //   const allMoves = moveList.querySelectorAll("li")

  //   allMoves.forEach((li, index) => {

  //     // setTimeout takes a callback to run after x miliseconds
  //     // this is ASYNCHRONOUS, so running this won't stop the forEach method from iterating
  //     // so we have to offset the timing using the index
  //     // effectively, we'll create a series of setTimeouts that will run at 500, 1000, 1500, etc.
  //     setTimeout(() => {
  //       move(li.textContent) // move the robot
  //       li.remove() // remove the li
  //     }, 500 * (index + 1))

  //   })

  // })

});
