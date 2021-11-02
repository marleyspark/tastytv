const morningProg = [
  {
    name: "The Real Ghostbusters (1984)",
    storyline:
      "The continuing adventures of the staff of the ghost removal service.",
    img: "./images/Realghostbusters.jpg",
    time: "7am - 8am"
  },
  {
    name: "Bobs Burgers (2011)",
    storyline:
      "Bob Belcher runs his dream restaurant with his wife and three children as their last hope of holding the family together.",
    img: "./images/bb.jpg",
    time: "8am - 9am"
  },
  {
    name: "Sharky and George (1991)",
    storyline:
      "Two fish private detectives, big pink shark-like fedora-wearing Sharky as the muscles and small slick bluish-orange George as the brains, fight crime and mad villains in the noirish underwater city of Seacago, reminiscent of 30s Chicago.",
    img: "./images/sg.jpg",
    time: "9am - 10am"
  },
  {
    name: "The Lion King (1994)",
    storyline:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    img: "./images/lk.jpg",
    time: "10am - 12am"
  }
];

const movieName = document.querySelector("#name1");
morningProg.forEach((movieItem) => {
  const innerBox = document.createElement("div");
  const progBox = document.querySelector(".progboxcontainer");
  progBox.appendChild(innerBox);
  innerBox.className = "innerbox";

  const movieImage = document.createElement("img");
  innerBox.appendChild(movieImage);
  movieImage.src = movieItem.img;
  movieImage.className = "newsimage";

  const movietime = document.createElement("h4");
  innerBox.appendChild(movietime);
  movietime.textContent = movieItem.time;

  const movieTitle = document.createElement("h4");
  innerBox.appendChild(movieTitle);
  movieTitle.textContent = movieItem.name;

  const paragraph = document.createElement("p");

  innerBox.appendChild(paragraph);
  paragraph.textContent = movieItem.storyline;
});

function goTomorrow() {
  window.location = "https://lhm6b.csb.app/tomorrow.html";
}

function goToday() {
  window.location = "https://lhm6b.csb.app/Programming.html";
}
