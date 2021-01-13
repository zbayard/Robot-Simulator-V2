document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // DOM ELEMENTS: variables & helper functions

  const moveBox = document.querySelector('#moves-container')
  const moveButton = document.querySelector("#move-button")


  document.addEventListener('keydown', function (e){
    
    function addMove(){
      const newMove = document.createElement("li")
    
        if (e.key === "ArrowLeft"){
          newMove.textContent = "left"
          // moveBox.appendChild(newMove)
        } else if (e.key === "ArrowRight"){
          newMove.textContent = "right"
          // moveBox.appendChild(newMove)
        } else if (e.key === "ArrowUp"){
          newMove.textContent = "up"
          // moveBox.appendChild(newMove)
        } else if (e.key === "ArrowDown"){
          newMove.textContent = "down"
          // moveBox.appendChild(newMove)
        } else {
          window.alert("invalid key")
        }
        
        moveBox.appendChild(newMove)
    
  }
    addMove();
  })

  moveButton.addEventListener('click', function(e){
    const currentMove = document.querySelector("#moves-container li")
    if (currentMove) {
      move(currentMove.textContent)
      currentMove.remove()
    } else {
      window.alert("No Moves!")
    }

    
  })
  // const moves = document.querySelector()
  document.addEventListener('click', function (e) {
    // console.log(e)
    if (e.target.matches("li")){
      e.target.remove()
    }
      
  })

  
  

  
  
  
});






