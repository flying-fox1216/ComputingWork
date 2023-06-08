let elem = document.getElementById("boxA");
console.log(elem);

elem.onclick = () => {
  // elem.style.backgroundColor = "blue";
  elem.classList.toggle("box--clicked");
};
