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
const container = document.getElementById('container');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let numSquares = 16; // Change this later to be the input

/**********************************************************************/
/*                             Main program                           */
/**********************************************************************/

/* Loop processing sketch boxes and rows */
for (let i = 0; i < numSquares; i++) {
   const row = document.createElement('div');
   row.classList.add('row');
   container.appendChild(row);

   for (let j = 0; j < numSquares; j++) {
      const box = document.createElement('div');
      row.appendChild(box);
      box.classList.add('box');
   }
}