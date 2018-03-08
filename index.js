/* Rockets */

// When a block is clicked, it should go to the top of the stack

let blocks = document.querySelector('.blocks'); // accesses all blocks on HTML

let blockOrder = -1; // moves block color to top
blocks.addEventListener('click', (e) => {
    e.target.style.order = blockOrder;
    blockOrder--; // reorders blocks in remaining color order
});


/* Travelers */
// travelers:
// * While a mouse is clicked down on a box, it should move to the right
//  * When the mouse button is released, it should travel back to its original position
//  * A mouse down that occurs during a transition back to the original position should 
// send it traveling to the right agian from its current position

let blockNewPosition = 


// use callbacks to move blocks right, back to orig position






 
