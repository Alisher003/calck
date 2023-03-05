// "use strict";

// let runnigTotal = 0;
// let buffer = 0;
// let previosOperator;

// const screen = document.querySelector('.screen');


// function buttonClick(value) {
//   if(isNaN(value)){
//     handleSymbol(value);
//   }else {
//     handleNumber(value);
//   }
//   screen.innerText = buffer;
// }

// function handleSymbol(symbol){
//   switch(symbol){
//     case "C":
//       buffer = '0'
//       runnigTotal = 0
//       break;
//     case '=':
//       if(previosOperator === null){
//         return
//       }
//       flushOperation(parseInt(buffer));
//         previosOperator = null;
//         buffer = runnigTotal;
//         runnigTotal = 0;
//         break;
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//           handleMath(symbol);
//           break;
        
//   }
// }

// function handleMath(symbol){
//   if(buffer === '0'){
//     return;
//   }

//   const intBuffer = parseInt(buffer);

//   if(runnigTotal === 0){
//     runnigTotal = intBuffer;
//   }else{
//     flushOperation(intBuffer);
//   }
//   previosOperator = symbol;
//   buffer = '0';

// }

// function flushOperation(intBuffer){
//   if(previosOperator === '+'){
//     runnigTotal += intBuffer;
//   }else if(previosOperator === '-'){
//     runnigTotal -= intBuffer;
//   }else if(previosOperator === '*'){
//     runnigTotal *= intBuffer;
//   }else if(previosOperator === '/'){
//     runnigTotal /= intBuffer;
//   }
// }

// function handleNumber(numberString){
//   if(buffer === '0'){
//     buffer = numberString;
//   }else{
//     buffer +=numberString;
//   }
// }
// function init(){
//   document.querySelector('.btn-list').addEventListener('click', function(event){
//     addEventListener('click', function(event){
//       buttonClick(event.target.innerText)
//     })
//   })
// }

