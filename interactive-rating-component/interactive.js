const submitButton = document.getElementsByClassName("submit")[0];
const radioInputs = document.querySelectorAll('input[name="ratings"]');
let result;
for (let i = 0; i < radioInputs.length; i++) {
  radioInputs[i].addEventListener("click", function () {
    result = radioInputs[i].value;
  });
}

const chooseModal = document.getElementsByClassName("choose-modal")[0];
const resultModal = document.getElementsByClassName("result-modal")[0];
const selectionMention =
  document.getElementsByClassName("selection-mention")[0];

function handleSubmit() {
  chooseModal.classList.add("hidden");
  resultModal.classList.remove("hidden");
  const pTag = document.createElement("p");
  pTag.classList.add("selection-letters");
  const pTagText = `You selected out ${result} of 5`;
  pTag.innerText = pTagText;
  selectionMention.appendChild(pTag);
}

submitButton.addEventListener("click", function () {
  radioInputs.checked = true;
});

const checked = document.querySelectorAll("input[type=radio]:checked");

function check() {
  if (checked.length > 0) {
    submitButton.removeAttribute("disabled");
  }
}

submitButton.onclick = function () {
  handleSubmit();
  check();
};

/*radioInputs.forEach(function (el) {
  el.addEventListener("click", function () {
    checked = document.querySelectorAll("input[type=radio]:checked");
    if (checked.length) {
      submitButton.removeAttribute("disabled");
    }
  });
});*/

/*function check() {
  if (radioInputs.checked) {
    submitButton.removeAttribute("disabled");
  }
}*/

/*submitButton.addEventListener("click", function () {
  if (radioInputs.checked == true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});*/

/* if(라디오버튼이 체크가 하나도 안돼있으면) {
  submit버튼을 disalbe로 바꾸기
} else {
  원래대로
}*/
