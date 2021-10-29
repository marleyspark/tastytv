const movies = [
  "Ghostbusters - 1984",
  "The Matrix - 1999",
  "Lion King - 1994",
  "Dune - 2021",
  "Shaun of the Dead - 2004",
  "Zoolander - 2001",
  "Star Trek: First Contact - 1996",
  "The Lord of the Rings: Fellowship of the Rings - 2001",
  "Spaced: Series One - 1999",
  "Bobs Burgers: Series One - 2011",
  "Star Trek: The Original Series One - 1966",
  "Over the Garden Wall (Mini-Series) - 2014"
];

const getMovie = document.querySelector("#random-movie");
getMovie.addEventListener("click", (event) => {
  const randomMovie = document.querySelector("#movie-details");
  randomMovie.textContent = movies[Math.floor(Math.random() * 12)];
});
