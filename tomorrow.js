const afternoonProg = [
  {
    name: "Family Guy (1999)",
    storyline:
      "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.",
    img: "./images/family-guy-1-logo.png",
    time: "12pm - 1pm"
  },
  {
    name: "What We Do in the Shadows (2019)",
    storyline:
      "A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.",
    img: "./images/WWDITS.png",
    time: "1pm - 2pm"
  },
  {
    name: "Spaced (1999)",
    storyline:
      "Friends Tim and Daisy, 20-something North Londoners with uncertain futures, must pretend to be a couple to live in the only apartment they can afford.",
    img: "./images/spaced.jpg",
    time: "3pm - 4pm"
  },
  {
    name: "The Matrix (1999)",
    storyline:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    img: "./images/matrixposter.jpg",
    time: "4pm - 7pm"
  }
];

const movieName = document.querySelector("#name1");
afternoonProg.forEach((movieItem) => {
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
