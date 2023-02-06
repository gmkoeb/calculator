let number1 = []
let number2 = []
number2[0] = ''
number1[0] = ''
let result = ''
let operation = ''
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
         break;
      case document.getElementById("subtract"):
         if (number1[1] == undefined){
            number1.push(1)
         }else{
            number1[1] = 1
         }
         operation = ' - '
         break;
      case document.getElementById("divide"):
         if (number1[1] == undefined){
            number1.push(2)
         }else{
            number1[1] = 2
         }
         operation = ' / '
         break;
      case document.getElementById("multiply"):
         if (number1[1] == undefined){
            number1.push(3)
         }else{
            number1[1] = 3
         }
         operation = ' * '
         break;
      case document.getElementById("CE"):
         if(number1.length == 1){
            number1[0] = ['']
          } else if (number1.length > 1){
            number2[0] = ['']
          }
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
            number1[0] = parseInt(-number1[0])
          } else if (number1.length > 1){
            number2[0] = parseInt(-number2[0])
          } else if (result != 0){
            result = parseInt(-result)
          }
         break;   
      case document.getElementById("equals"):
         getResult(number1, number2)
         document.body.querySelector(".equality").innerText = " = "
         document.body.querySelector(".result").innerText = result
         break;   
      default:
         getNumber(clickedElement, number1, number2)
         break;
   }
}

function getNumber(clickedElement, array1, array2){
   if (array1.length == 0){
     array1.push(parseInt(clickedElement))
   } else if(array1.length == 1){
      array1.push(array1[array1.length-1] * 10 + parseInt(clickedElement))
      array1.splice(0, 1)
   } else if (array1.length >= 2 & array2.length == 0){
      array2.push(parseInt(clickedElement))
   } else if (array2.length == 1){
      array2.push(array2[array2.length-1] * 10 + parseInt(clickedElement))
      array2.splice(0, 1)
   }
}

function getResult(array1, array2){
   switch (array1[1]) {
      case 0:
         result = (array1[0] + array2[0])
         array1[0] = result
         break;
      case 1:
         result = (array1[0] - array2[0])
         array1[0] = result
         break;
      case 2:
         result = (array1[0] / array2[0])
         array1[0] = result
         break;
      case 3:
         result = (array1[0] * array2[0])
         array1[0] = result
         break;
      default: alert("Você não clicou numa operação válida!")
         break;
   }
}

function changeNumber(){
   document.body.querySelector("p").innerText = number1[0].toString() + operation + number2[0].toString()
   if (result != ''){
      document.body.querySelector("p").innerText = number1[0].toString() + operation + number2[0].toString() + " = " + result
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

})

