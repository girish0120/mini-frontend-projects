changeColor = (e) => {
  e.preventDefault();
  shoeImg = document.getElementById("shoeImg");
  blobItem = document.getElementById("blobItem");

  if (e.target.value === "red") {
    blobItem.style.backgroundColor = "rgb(238, 75, 43)";
    shoeImg.style.transform = "scaleX(1) rotate(-20deg)";
    shoeImg.src = "./images/shoeRed.png";
  } else if (e.target.value === "blue") {
    shoeImg.src = "./images/shoeblue.png";
    shoeImg.style.transform = "scaleX(1) rotate(-20deg)";
    blobItem.style.backgroundColor = "rgb(0, 150, 255)";
  } else {
    shoeImg.src = "./images/shoeGreen.png";
    shoeImg.style.transform = "scaleX(-1) rotate(20deg)";
    blobItem.style.backgroundColor = "rgb(187, 249, 43)";
  }
};
