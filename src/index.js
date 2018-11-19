function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hide("skills-page");
  hide("languages-page");
  show("home-page");
  console.info("Click on home");
}

function showSkillsPage() {
  hide("home-page");
  hide("languages-page");
  show("skills-page");
  console.info("Click on skils");
}

function showLanguagesPage() {
  hide("home-page");
  hide("skills-page");
  show("languages-page");
  console.info("Click on languages");
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("languages-menu").onclick = showLanguagesPage;



