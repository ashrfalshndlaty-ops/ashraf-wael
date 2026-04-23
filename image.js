
let images = document.querySelectorAll(".gallery img");
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");
let closeBtn = document.getElementById("close");

images.forEach(img => {
  img.onclick = function () {
    popup.style.display = "flex";
    popupImg.src = img.src;
  }
});

closeBtn.onclick = function () {
  popup.style.display = "none";
};