let number1 = []
let number2 = []
number2[0] = ''
number1[0] = ''
let result = ''
let operation = ''
let isDecimalsAllowed = false
buttons = document.querySelector(".buttons")

function getOperation(clickedOperator, clickedElement){
   switch (clickedOperator) {
      case document.getElementById("plus"):
         if (number1[1] == undefined){
            number1.push(0)
         }else{
            number1[1] = 0
         }
         operation = ' + '
         isDecimalsAllowed = false
         break;
      case document.getElementById("subtract"):
         if (number1[1] == undefined){
            number1.push(1)
         }else{
            number1[1] = 1
         }
         operation = ' - '
         isDecimalsAllowed = false
         break;
      case document.getElementById("divide"):
         if (number1[1] == undefined){
            number1.push(2)
         }else{
            number1[1] = 2
         }
         operation = ' / '
         isDecimalsAllowed = false
         break;
      case document.getElementById("multiply"):
         if (number1[1] == undefined){
            number1.push(3)
         }else{
            number1[1] = 3
         }
         operation = ' * '
         isDecimalsAllowed = false
         break;
      case document.getElementById("CE"):
         if(number1.length == 1){
            number1[0] = ['']
          } else if (number1.length > 1){
            number2[0] = ['']
          }
         isDecimalsAllowed = false
         break;
      case document.getElementById("C"):
         number1 = ['']
         number2 = ['']
         result = ''
         operation = ''
         document.body.querySelector("p").innerText = ''
         document.body.querySelector(".equality").innerText = ""
         document.body.querySelector(".result").innerText = ''
         changeNumber()
         break;
      case document.getElementById("plusminus"):
         if(number1.length == 1){
            number1[0] = parseFloat(-number1[0])
          } else if (number1.length > 1){
            number2[0] = parseFloat(-number2[0])
          } else if (result != 0){
            result = parseFloat(-result)
          }
         break;
      case document.getElementById("%"):
         if(number1.length == 1){
            number1[0] = parseFloat(number1[0]/100)
          } else if (number1.length > 1){
            number2[0] = parseFloat(number2[0]/100)
          } else if (result != 0){
            result = parseInt(result/100)
          }
         break; 
      case document.getElementById(","):
         isDecimalsAllowed = true
         break;                
      case document.getElementById("equals"):
         getResult(number1, number2)
         document.body.querySelector(".equality").innerText = " = "
         document.body.querySelector(".result").innerText = result.toPrecision(3)
         break;   
      default:
         getNumber(clickedElement, number1, number2)
         break;
   }
}

function getNumber(clickedElement, array1, array2){
   if (isDecimalsAllowed == true){
      if (array1.length == 0){
         array1.push((clickedElement/10))
       } else if(array1.length == 1){
          if(array1[0].toString().split('.').length == 1){
            array1.push((array1[array1.length-1].toString() + '.' + clickedElement))
          } else if (array1[0].toString().split('.').length > 1){
            array1.push((array1[array1.length-1] + clickedElement))
          }
          array1.splice(0, 1)
       } else if (array1.length >= 2 & array2.length == 0){
          array2.push(clickedElement)
       } else if (array2.length == 1){
          if(array2[0].toString().split('.').length == 1){
            array2.push((array2[array2.length-1].toString() + '.' + clickedElement))
            } else if (array2[0].toString().split('.').length > 1){
               array2.push((array2[array2.length-1] + clickedElement))
            }
            array2.splice(0, 1)
       }
   } else{
      if (array1.length == 0){
      array1.push(parseFloat(clickedElement))
      } else if(array1.length == 1){
         array1.push(parseFloat(array1[array1.length-1] + clickedElement))
         array1.splice(0, 1)
      } else if (array1.length >= 2 & array2.length == 0){
         array2.push(parseFloat(clickedElement))
      } else if (array2.length == 1){
         array2.push(parseFloat(array2[array2.length-1] + clickedElement))
         array2.splice(0, 1)
      }
   }
}

function getResult(array1, array2){
   switch (array1[1]) {
      case 0:
         result = parseFloat(array1[0]) + parseFloat(array2[0])
         array1[0] = result
         break;
      case 1:
         result = parseFloat(array1[0]) - parseFloat(array2[0])
         array1[0] = result.
         break;
      case 2:
         result = parseFloat(array1[0]) / parseFloat(array2[0])
         array1[0] = result
         break;
      case 3:
         result = (parseFloat(array1[0]) * parseFloat(array2[0]))
         array1[0] = result
         break;
      default: alert("Você não clicou numa operação válida!")
         break;
   }
}

function changeNumber(){
   document.body.querySelector("p").innerText = number1[0].toString() + operation + number2[0].toString()
   if (result != ''){
      document.body.querySelector("p").innerText = number1[0].toString() + operation + number2[0].toString() + " = " + result.toPrecision(3)
   }
}
   
buttons.addEventListener("click", function getClickedElement(e){
   let clickedElement = e.target.innerHTML
   let operator = e.target
   if (operator.innerHTML == ''){
      let parent = operator.parentElement
      operator = parent
   }
   getOperation(operator, clickedElement)
   changeNumber()
   console.log(number1)
})

