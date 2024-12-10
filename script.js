document.getElementById("changeTitle").addEventListener("click", function () {
  document.getElementById("title").innerHTML = "JavaScript is geweldig!";
});

document.getElementById("addText").addEventListener("click", function () {
  document.getElementById("paragraph").after("Hier is extra text");
});

document.getElementById("changeColor").addEventListener("click", () => {
  const rood = Math.round(Math.random() * 255);
  const groen = Math.round(Math.random() * 255);
  const blauw = Math.round(Math.random() * 255);
  document.getElementById(
    "colorBox"
  ).style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
});

document.getElementById("hideText").addEventListener("click", function () {
  document.getElementById("text").style.display = "none";
});

document.getElementById("addItem").addEventListener("click", function () {
  document.getElementById("itemList").push("nieuw item");
});
