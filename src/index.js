import { createStore } from "redux";

const add = document.getElementById("add");
const remove = document.getElementById("remove");
const number = document.querySelector("span");

number.innerText = 0;

const reducer = (count = 0, action) => {
  // console.log(count, action);

  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "REMOVE") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(reducer);

const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "REMOVE" });

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
remove.addEventListener("click", () => countStore.dispatch({ type: "REMOVE" }));

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleRemove = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// remove.addEventListener("click", handleRemove);
