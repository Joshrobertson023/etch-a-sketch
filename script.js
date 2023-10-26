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

// If the squares are 16, create a 16 by 16 grid
// Write a loop to create 16 squares right, then 16 rows down
// These squares must have specific CSS properties to fill the container and all grow and shrink the same size

// 1: Create a row container for those boxes
// Append the row container in the big container
// 2: Create a box
// 3: Append box to row container
// 4: Loop back to step 2 until have 16 boxes
// 5: Loop back to step 1 until have 16 rows
for (let i = 0; i < numSquares; i++) {
   const row = document.createElement('div');
   container.appendChild(row);
}