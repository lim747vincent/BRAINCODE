const csButton = document.getElementById("ComputerScience");
const dsButton = document.getElementById("DataScience");
const itButton = document.getElementById("IT");
const jsButton = document.getElementById("JavaScript");
const infoContainer = document.getElementById("info-container");

function hideAllInfo() {
  const infos = infoContainer.children;
  for (let i = 0; i < infos.length; i++) {
    infos[i].style.display = "none";
  }
}

function showInfo(infoId) {
  const info = document.getElementById(infoId);
  hideAllInfo();
  info.style.display = "block";
}

showInfo("info1");

csButton.addEventListener("click", function () {
  showInfo("info1");
});

dsButton.addEventListener("click", function () {
  showInfo("info2");
});

itButton.addEventListener("click", function () {
  showInfo("info3");
});

jsButton.addEventListener("click", function () {
  showInfo("info4");
});
