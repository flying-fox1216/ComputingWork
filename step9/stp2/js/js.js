// let box = document.querySelector("#box2");
// (let boxes = document.querySelector(".box2"); class 불러오기)
// (let tag = document.querySelector("div"); 태그도 들어갈 수 있다.)

// box.onclick = () => {
//   box.classList.toggle("box-clicked");
// };

// let box = document.querySelector(".box");
// box.onclick = () => {
//   box.classList.toggle("box-clicked");
// };

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);

// boxes.forEach(function (grass) {
//   grass.onclick = () => {
//     grass.classList.toggle("box--clicked");
//   };
// });

boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("box--clicked");
  };
});
