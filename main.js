/**********
 * DATA *
 **********/

 let sixes = [];
 let doubleSixes = [];
 let twelves = [];
 let twenties = [];
 
 /********************
  * HELPER FUNCTIONS *
 ********************/
 
 const getRandomNumber = function(max) {
     const rand = Math.random();
     const range = rand * max;
     const result = Math.ceil(range);
     return result;
 }
 
 /*******************
  * YOUR CODE BELOW *
  *******************/
 
 let resetButton = document.querySelector('#reset-button');
 
 let imageD6 = document.querySelector('#d6-roll');
 let doubleDice1 = document.querySelector('#double-d6-roll-1')
 let doubleDice2 = document.querySelector('#double-d6-roll-2')
 let imageD12 = document.querySelector('#d12-roll')
 let imageD20 = document.querySelector('#d20-roll')
 
 let d6Mean = document.querySelector('#d6-rolls-mean')
 let doubleDiceMean = document.querySelector('#double-d6-rolls-mean')
 let d12Mean = document.querySelector('#d12-rolls-mean')
 let d20Mean = document.querySelector('#d20-rolls-mean')
 
 let d6Median = document.querySelector('#d6-rolls-median')
 let doubleDiceMedian = document.querySelector('#double-d6-rolls-median')
 let d12Median = document.querySelector('#d12-rolls-median')
 let d20Median = document.querySelector('#d20-rolls-median')
 
 
 /*******************
  * EVENT LISTENERS *
  *******************/
 imageD6.addEventListener('click', function(){
     console.log('D6 Clicked!')
     d6RollFunction();
 })
 
 doubleDice1.addEventListener('click', function(){
     console.log('Double D6-1 Clicked')
     doubleD61();
 })
 
 doubleDice2.addEventListener('click', function(){
     console.log('Double D6-2 Clicked')
     doubleD62();
 })
 
 imageD12.addEventListener('click', function(){
     console.log('D12 Clicked')
     d12Roll();
 })
 
 imageD20.addEventListener('click', function(){
     console.log('D20 Clicked')
     d20Roll();
 })
 
 resetButton.addEventListener('click', reset)
 
 
 
 /******************
  * RESET FUNCTION *
  ******************/
 function reset(){
     //Empty global arrays
     sixes = []
     doubleSixes = []
     d12 = []
     d20 = []
     //Reset images
     imageD6.src = './images/start/d6.png';
     d6Mean.innerText = 'N/A'
     d6Median.innerText = 'N/A'
 
     doubleDice1.src = './images/start/d6.png';
     doubleDice2.src = './images/start/d6.png';
     doubleDiceMean.innerText = 'N/A'
     doubleDiceMedian.innerText = 'N/A'
 
     imageD12.src = './images/start/d12.jpeg'
     d12Mean.innerText = 'N/A'
     d12Median.innerText = 'N/A'
 
     imageD20.src = './images/start/d20.jpg'
     d20Mean.innerText = 'N/A'
     d20Median.innerText = 'N/A'
 }
 reset();
 
 /****************************
  * CLICK HANDLING FUNCTIONS *
 ****************************/
 function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);
 
    imageD6.src =`./images/d6/${result}.png`
    sixes.push(result);
    console.log(sixes);
 
    findMean(sixes);
    d6Mean.innerText = findMean(sixes);
    findMedian(sixes);
    d6Median.innerText = findMedian(sixes)
 
 }
 
 function doubleD61(){
     let result = getRandomNumber(6);
     let result2 = getRandomNumber(6);
     console.log(result);
 
     doubleDice1.src = `./images/d6/${result}.png`
     doubleDice2.src = `./images/d6/${result2}.png`
     doubleSixes.push(result);
     console.log(doubleSixes);
 
     findMean(doubleSixes)
     doubleDiceMean.innerText = findMean(doubleSixes)
     findMedian(doubleSixes);
     doubleDiceMedian.innerText = findMedian(doubleSixes)
 }
 
 function doubleD62(){
     let result = getRandomNumber(6);
     let result2 = getRandomNumber(6);
     console.log(result);
 
     doubleDice1.src = `./images/d6/${result}.png`
     doubleDice2.src = `./images/d6/${result2}.png`
     doubleSixes.push(result+result2);
     console.log(doubleSixes);
 
     findMean(doubleSixes)
     doubleDiceMean.innerText = findMean(doubleSixes)
     findMedian(doubleSixes);
     doubleDiceMedian.innerText = findMedian(doubleSixes)
 }
 
 
 function d12Roll(){
     let result = getRandomNumber(12);
     console.log(result);
 
     imageD12.src = `./images/numbers/${result}.png`
     twelves.push(result);
     console.log(twelves);
 
     findMean(twelves);
     d12Mean.innerText = findMean(twelves)
     findMedian(twelves);
     d12Median.innerText = findMedian(twelves)
 }
 
 function d20Roll(){
     let result = getRandomNumber(20);
     console.log(result);
 
     imageD20.src = `./images/numbers/${result}.png`
     twenties.push(result);
     console.log(twenties);
 
     findMean(twenties);
     d20Mean.innerText = findMean(twenties)
     findMedian(twenties);
     d20Median.innerText = findMedian(twenties)
 }
 
 
 
 /****************
  * MATH SECTION *
  ****************/
 function findMean(array){
 
     let total = 0     
     for(let i = 0; i < array.length; i++){ 
         total = total + array[i];
     }
     return Number(total/array.length.toPrecision(2));
 }
 
 function findMedian(array){
 let result = 0;
 let index1 = 0;
 let index2 = 0;
 
     if(array.length%2 !== 0){
         result = Math.floor(array.length/2);
         return Number(array[result].toPrecision(2));
     }
     else if(array.length%2 === 0){
         index1 = array[(array.length/2)-1];
         index2 = array[(array.length/2)];
         result = (index1 + index2)/2;
         return Number(result.toPrecision(2))
     }
 }
 
 function getMode(array){
     let obj = {};
     let highest = 0;
     let count = 0;
 
     for(let i=0; i<array.length; i++){
         let num = array[i];
 
         if(!obj[num]){
             obj[num] = 1;
         
         }
 
         if(count < obj[num]){
             highest = num;
             count = obj[num];
         }
     }
     return Number(highest);
 }