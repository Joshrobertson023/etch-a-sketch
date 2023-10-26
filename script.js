/**********************************************************************/
/*                                                                    */
/* Program name: Etch-a-Sketch                                        */
/* Date:         October 26, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/*                                                                    */
/**********************************************************************/



/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const container = document.getElementById('container'),
      btnRender = document.getElementById('btnrender');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let numSquares = 16;

/**********************************************************************/
/*                             Main program                           */
/**********************************************************************/
renderGrid(numSquares); // Open document with a 16x16 grid already rendered

btnRender.addEventListener('click', () => {
   numSquares = getNumber();
   clearGrid();
   renderGrid(numSquares);
});

box.addEventListener('click', () => {
   box.style.backgroundColor = "black";
})

/**********************************************************************/
/*                         Remove all rows                            */
/**********************************************************************/
function clearGrid() {
   const rows = container.querySelectorAll('.row');
   rows.forEach((row) => {
      container.removeChild(row);
   });
}

/**********************************************************************/
/*                       Render boxes and rows                        */
/**********************************************************************/
function renderGrid(numIterations) {
   for (let i = 0; i < numIterations; i++) {
      let row = document.createElement('div');
      row.classList.add('row');
      container.appendChild(row);

      for (let j = 0; j < numIterations; j++) {
         let box = document.createElement('div');
         row.appendChild(box);
         box.classList.add('box');
         box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
         })
      }
   }  
}

/**********************************************************************/
/*                     Get the number of squares                      */
/**********************************************************************/
function getNumber() {
   do {
      numSquares = parseInt(document.getElementById('input').value);
   } while (numSquares < 4 || numSquares > 100);
   return numSquares;
}