function setInnerTextById(Id, value) {
  const element = document.getElementById(Id);
  element.innerText = value;
}

function disableUnselectedButtons() {
  for (const seatButton of seatButtons) {
    if (!seatButton.classList.contains("bg-primaryColor")) {
      seatButton.setAttribute("disabled", "");
    }
  }
}
function enableAllButtons() {
  for (const seatButton of seatButtons) {
    seatButton.removeAttribute("disabled");
  }
}
function enableButtonsValidation() {
  for (const seatButton of seatButtons) {
    if (seatButton.classList.contains("bg-primaryColor")) {
    }
  }
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function removeHideClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function keyUp() {
  {
    document.getElementById("phone-number").addEventListener("input", function() {
      const phoneNumber = document.getElementById("phone-number");
      console.log(parseInt(phoneNumber.value));
      return phoneNumber.value
    } )
  }
}
