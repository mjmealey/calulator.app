//allows errors and the numbers in the calculator to display
let errorDisplayEl = document.getElementById("errorDisplayEl")
let containerTwo = document.getElementById("containerTwo")

//operator ids for the dom
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let exponentButton = document.getElementById("exponentButton");
let clearButton = document.getElementById("clearButton");
let equalButton = document.getElementById("equalButton");
let decimalButton = document.getElementById("decimalButton");
let backspaceButton = document.getElementById("backspaceButton");

//number ids for the dom
let buttonZero = document.getElementById("buttonZero");
let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let buttonThree = document.getElementById("buttonThree");
let buttonFour = document.getElementById("buttonFour");
let buttonFive = document.getElementById("buttonFive");
let buttonSix = document.getElementById("buttonSix");
let buttonSeven = document.getElementById("buttonSeven");
let buttonEight = document.getElementById("buttonEight");
let buttonNine = document.getElementById("buttonNine");


//storedInput stores numbers as they are put into the calculator
let storedInput = "";

//currentNumber is the number entered into the calculator right before it is sent to the storedInput variable as a string
let currentNumber = null;

//answer to the calculator
let result = 0;

//array for storing every number and operator as they are entered
let evaluation = [];


//keyboard support
window.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    addButton.click();
  } else if (e.key === "-") {
    subtractButton.click();
  } else if (e.key === "*") {
    multiplyButton.click();
  } else if (e.key === "/") {
    divideButton.click();
  } else if (e.key === "^") {
    exponentButton.click();
  } else if (e.key === ".") {
    decimalButton.click();
  } else if (e.key === "=") {
    equalButton.click();
  } else if (e.key === "0") {
    buttonZero.click();
  } else if (e.key === "1") {
    buttonOne.click();
  } else if (e.key === "2") {
    buttonTwo.click();
  } else if (e.key === "3") {
    buttonThree.click();
  } else if (e.key === "4") {
    buttonFour.click();
  } else if (e.key === "5") {
    buttonFive.click();
  } else if (e.key === "6") {
    buttonSix.click();
  } else if (e.key === "7") {
    buttonSeven.click();
  } else if (e.key === "8") {
    buttonEight.click();
  } else if (e.key === "9") {
    buttonNine.click();
  }
  else if(e.key === "backspace"){
    backspaceButton.click()
  }
});

//event listeners for each operator
addButton.addEventListener("click", (e) => {
  if (e.target.id === "addButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push("+");
    storedInput += "+";
    containerTwo.innerText = "+";
  }
});

subtractButton.addEventListener("click", (e) => {
  if (e.target.id === "subtractButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push("-");
    storedInput += "-";
    containerTwo.innerText = "-";
  }
});

multiplyButton.addEventListener("click", (e) => {
  if (e.target.id === "multiplyButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push("*");
    storedInput += "*";
    containerTwo.innerText = "*";
  }
});

divideButton.addEventListener("click", (e) => {
  if (e.target.id === "divideButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push("/");
    storedInput += "/";
    containerTwo.innerText = "/";
  }
});

exponentButton.addEventListener("click", (e) => {
  if (e.target.id === "exponentButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push("^");
    storedInput += "^";
    containerTwo.innerText = "^";
  }
});

clearButton.addEventListener("click", (e) => {
  if (e.target.id === "clearButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation = [];
    currentNumber = null;
    storedInput = "";
    containerTwo.innerText = 0;
    result = null;
  }
});

equalButton.addEventListener("click", (e) => {
  if (e.target.id === "equalButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    
    for (let i = 0; i < evaluation.length; i++) {
      if (evaluation[i] === "^") {
        result = Math.pow(evaluation[i - 1], evaluation[i + 1]);
        evaluation.splice(i - 1, 3, result);
        i -= 2;
      } else if (evaluation[i] === "*") {
        result = evaluation[i - 1] * evaluation[i + 1];
        evaluation.splice(i - 1, 3, result);
        i -= 2;
      } else if (evaluation[i] === "/") {
        if (parseFloat(storedInput) === 0) {
          errorDisplayEl.innerText = "Error: cannot use 0 in division";
          return;
        }
        result = evaluation[i - 1] / evaluation[i + 1];
        evaluation.splice(i - 1, 3, result);
        i -= 2;
      } else if (evaluation[i] === "+") {
        result = evaluation[i - 1] + evaluation[i + 1];
        evaluation.splice(i - 1, 3, result);
        i -= 2;
      } else if (evaluation[i] === "-") {
        result = evaluation[i - 1] - evaluation[i + 1];
        evaluation.splice(i - 1, 3, result);
        i -= 2;
      }
    }
    storedInput = parseFloat(result.toFixed(2)).toString();
    containerTwo.innerText = storedInput;
  }
});

backspaceButton.addEventListener("click", (e) => {
  if (e.target.id === "backspaceButton") {
    if (storedInput.length > 0) {
      storedInput = storedInput.slice(0, -1);
      containerTwo.innerText = storedInput;
      evaluation.splice(-1)
    }
  }
});


decimalButton.addEventListener("click", (e) => {
  if (e.target.id === "decimalButton") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    evaluation.push(".");
    storedInput = ".";
    containerTwo.innerText = storedInput;
  }
});

//the storedInput+= allows for the numbers to be added into the calculator

buttonZero.addEventListener("click", (e) => {
  if (e.target.id === "buttonZero") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "0"; 
    containerTwo.innerText = "0";
  }
});

buttonOne.addEventListener("click", (e) => {
  if(e.target.id === "buttonOne"){
  if (!isNaN(parseFloat(storedInput))) {
    evaluation.push(parseFloat(storedInput));
  }
  storedInput += "1";
  containerTwo.innerText = "1";
}});

buttonTwo.addEventListener("click", (e) => {
  if (e.target.id === "buttonTwo") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "2";
    containerTwo.innerText = "2";
  }
});

buttonThree.addEventListener("click", (e) => {
  if (e.target.id === "buttonThree") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "3";
    containerTwo.innerText = "3";
  }
});

buttonFour.addEventListener("click", (e) => {
  if (e.target.id === "buttonFour") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "4";
    containerTwo.innerText = "4";
  }
});

buttonFive.addEventListener("click", (e) => {
  if (e.target.id === "buttonFive") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "5";
    containerTwo.innerText = "5";
  }
});

buttonSix.addEventListener("click", (e) => {
  if (e.target.id === "buttonSix") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }

    storedInput += "6";
    containerTwo.innerText = "6";
  }
});

buttonSeven.addEventListener("click", (e) => {
  if (e.target.id === "buttonSeven") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "7";
    containerTwo.innerText = "7";
  }
});

buttonEight.addEventListener("click", (e) => {
  if (e.target.id === "buttonEight") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "8";
    containerTwo.innerText = "8";
  }
});

buttonNine.addEventListener("click", (e) => {
  if (e.target.id === "buttonNine") {
    if (!isNaN(parseFloat(storedInput))) {
      evaluation.push(parseFloat(storedInput));
    }
    storedInput += "9";
    containerTwo.innerText = "9";
  }
});
