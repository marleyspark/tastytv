const morningProg = [
  {
    name: "The Real Ghostbusters (1984)",
    storyline:
      "The continuing adventures of the staff of the ghost removal service."
  },
  {
    name: "Bobs Burgers (2011)",
    storyline:
      "Bob Belcher runs his dream restaurant with his wife and three children as their last hope of holding the family together."
  },
  {
    name: "Sharky and George (1991)",
    storyline:
      "Two fish private detectives, big pink shark-like fedora-wearing Sharky as the muscles and small slick bluish-orange George as the brains, fight crime and mad villains in the noirish underwater city of Seacago, reminiscent of 30s Chicago."
  },
  {
    name: "The Lion King (1994)",
    storyline:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  }
];

const filmName = morningProg[0].name;
const filmStory = morningProg[0].storyline;
const filmName2 = morningProg[1].name;
const filmStory2 = morningProg[1].storyline;
const filmName3 = morningProg[2].name;
const filmStory3 = morningProg[2].storyline;
const filmName4 = morningProg[3].name;
const filmStory4 = morningProg[3].storyline;
document.getElementById("name1").innerHTML = filmName;
document.getElementById("film1").innerHTML = filmStory;
document.getElementById("name2").innerHTML = filmName2;
document.getElementById("film2").innerHTML = filmStory2;
document.getElementById("name3").innerHTML = filmName3;
document.getElementById("film3").innerHTML = filmStory3;
document.getElementById("name4").innerHTML = filmName4;
document.getElementById("film4").innerHTML = filmStory4;

const afternoonProg = [
  {
    name: "Family Guy (1999)",
    storyline:
      "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.",
    img: "./images/family-guy-1-logo.png"
  },
  {
    name: "What We Do in the Shadows (2019)",
    storyline:
      "A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.",
    img: "./images/WWDITS.png"
  },
  {
    name: "Spaced (1999)",
    storyline:
      "Friends Tim and Daisy, 20-something North Londoners with uncertain futures, must pretend to be a couple to live in the only apartment they can afford.",
    img: "./images/spaced.jpg"
  },
  {
    name: "The Matrix (1999)",
    storyline:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    img: "./images/matrixposter.jpg"
  }
];

const filmNameAnoon = afternoonProg[0].name;
const filmStoryAnoon = afternoonProg[0].storyline;
const filmNameAnoon2 = afternoonProg[1].name;
const filmStoryAnoon2 = afternoonProg[1].storyline;
const filmNameAnoon3 = afternoonProg[2].name;
const filmStoryAnoon3 = afternoonProg[2].storyline;
const filmNameAnoon4 = afternoonProg[3].name;
const filmStoryAnoon4 = afternoonProg[3].storyline;
document.getElementById("name5").innerHTML = filmNameAnoon;
document.getElementById("film5").innerHTML = filmStoryAnoon;
document.getElementById("name6").innerHTML = filmNameAnoon2;
document.getElementById("film6").innerHTML = filmStoryAnoon2;
document.getElementById("name7").innerHTML = filmNameAnoon3;
document.getElementById("film7").innerHTML = filmStoryAnoon3;
document.getElementById("name8").innerHTML = filmNameAnoon4;
document.getElementById("film8").innerHTML = filmStoryAnoon4;

function goTomorrow() {
  window.location = "https://lhm6b.csb.app/tomorrow.html";
}

function goToday() {
  window.location = "https://lhm6b.csb.app/Programming.html";
}
