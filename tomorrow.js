const afternoonProg = [
  {
    name: "Family Guy (1999)",
    storyline:
      "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another."
  },
  {
    name: "What We Do in the Shadows (2019)",
    storyline:
      "A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island."
  },
  {
    name: "Spaced (1999)",
    storyline:
      "Friends Tim and Daisy, 20-something North Londoners with uncertain futures, must pretend to be a couple to live in the only apartment they can afford."
  },
  {
    name: "The Matrix (1999)",
    storyline:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
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
