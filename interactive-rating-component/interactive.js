const submitButton = document.getElementsByClassName("submit")[0];
const radioInputs = document.querySelectorAll('input[name="ratings"]');
let result;

for (let i = 0; i < radioInputs.length; i++) {
  radioInputs[i].addEventListener("click", function () {
    result = radioInputs[i].value;
    console.log("result", result);
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

submitButton.onclick = function () {
  handleSubmit();
};

let choosenum = document.getElementsByClassName("rating-numbers");
let letters = document.getElementsByClassName("selection-letters")[0];
let hidden = document.getElementsByClassName("rating-state hidden")[0];
