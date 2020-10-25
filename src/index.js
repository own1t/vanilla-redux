const add = document.getElementById("add");
const remove = document.getElementById("remove");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateText();
};

const handleRemove = () => {
  count--;
  updateText();
};

add.addEventListener("click", handleAdd);
remove.addEventListener("click", handleRemove);
