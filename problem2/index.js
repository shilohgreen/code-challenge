function isValidEthAddress(address) {
  const ethAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
  return ethAddressRegex.test(address);
}

function clean(e) {
  var theEvent = e || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function verify(button) {
  const inputGroup = document.getElementsByTagName("input");

  for (let i = 0; i < inputGroup.length; i++) {
    const input = inputGroup[i];
    colorLogic(input.value, input.parentElement, input.id);
  }

  const successGroup = document.getElementsByClassName("success");

  if (successGroup.length == 3) {
    if (!button.classList.contains("active")) {
      button.classList.remove("fail");
      button.classList.add("active");
      setTimeout(function() {
        button.classList.remove("active");
      }, 1000);
    }
  } else {
    button.classList.add("fail");
  }
}

function colorLogic(payload, groupElement, logic) {
  removeColor(groupElement);

  // error if empty
  if (payload == "") {
    addColor(groupElement, false);
    // popup: form is empty
    return;
  }

  switch (logic) {
    case "address":
      if (payload != "" && isValidEthAddress(payload)) {
        addColor(groupElement, true);
        return;
      } else {
        addColor(groupElement, false);
      }
      break;

    case "amount":
      if (payload != "" && parseInt(payload) < 10000) {
        addColor(groupElement, true);
        return;
      } else {
        console.log("amount fail");
        addColor(groupElement, false);
        // popup: not valid eth format
      }
      break;
    case "otp":
      if (payload != "" && parseInt(payload) < 100000) {
        addColor(groupElement, true);
        return;
      } else {
        console.log("otp fail");
        addColor(groupElement, false);
        // popup: invalid number
      }
      break;
  }
}

function removeColor(groupElement) {
  try {
    groupElement.classList.remove("error");
    groupElement.classList.remove("success");
  } catch {}
}

function addColor(groupElement, success) {
  if (!success) {
    groupElement.classList.add("error");
    groupElement.classList.add("shake");

    setTimeout(function() {
      groupElement.classList.remove("shake");
    }, 500);
  } else {
    groupElement.classList.add("success");
  }
}
