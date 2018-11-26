function $(id) {
  return document.getElementById(id);
}
function hide(id) {
  $(id).style.display = "none";
}
function show(id) {
  $(id).style.display = "block";
}

function hideElement(el) {
  el.style.display = 'none';
}

function hideAllPages() {
  var pages = document.querySelectorAll(".page-block");
  pages.forEach(hideElement);
}

function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      hideAllPages();
      var page = this.getAttribute('data-page');
      show(page + "-page");
    };
  }
}

function initSkillsPage() {
  var skills = [ 'js', 'HTML','css'];
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function(skill) {
    return `<li>${skill.toUpperCase()}</li>`;
  });

  console.log('resultList= ', listItems);
  resultList.innerHTML = listItems.join('');
}

initMenu();
show("skills-page");
initSkillsPage();