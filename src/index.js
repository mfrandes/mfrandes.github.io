function $(id) {
  return document.getElementById(id);
}
function hide(id) {
  $(id).style.display = "none";
}
function show(id) {
  $(id).style.display = "block";
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

$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("languages-menu").onclick = showLanguagesPage;



