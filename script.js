const displayElement = document.getElementById("display");
const historyElement = document.getElementById("history");
var currentInput = "0";
var currentOperator = "";

function clearDisplay() {
  displayElement.value = "0";
  currentInput = "0";
  currentOperator = "";
  document.getElementById("history").innerText = currentOperator;
}

//C 버튼 클릭시  하나씩 지우기
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  displayElement.value = currentInput;
}

//소수점 추가 함수
function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    displayElement.value = currentInput;
  }
}

// 디스플레이에 숫자 및 연산자 추가 함수
function appendToDisplay(value) {
  if (currentInput === "0" || currentInput === "숫자 아님") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  displayElement.value = currentInput;

  //history 박스에 보여주기 (한줄씩)
  historyElement.innerText += value + "\n";
}

//연산자 추가 함수
function appendOperator(operator) {
  if (currentInput !== "숫자 아님") {
    calculate();
    currentOperator = operator;
    appendToDisplay(operator);
  }
}

// 계산 함수
function calculate() {
  try {
    var result = eval(currentInput);
    if (isNaN(result) || !isFinite(result)) {
      currentInput = "숫자 아님";
      displayElement.value = currentInput;
    } else {
      currentInput = result.toString();
      displayElement.value = currentInput;
    }
  } catch (error) {
    currentInput = "숫자 아님";
    displayElement.value = currentInput;
  }

  //연산자 입력이 안되었을시 alert 창 띄우기
  if (
    currentInput === "+" ||
    currentInput === "-" ||
    currentInput === "*" ||
    currentInput === "/"
  ) {
    alert("더하기, 빼기, 곱하기, 나누기 다음 숫자를 입력하세요");
    return;
  }
}
