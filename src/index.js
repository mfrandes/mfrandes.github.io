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
  var skills = [
    ['js',   7, "Andrei"],
    ['HTML', 6, "Elena"],
    ['css',  2, ""]
  ];
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function(skill) {
    var enorsedBy = '- Endorsed by';
    if(skill[2] == ""){
      enorsedBy = "";
    }
    return `<li> (1) ${skill[0].toUpperCase()}
       <span style="color: gray">- ${skill[1]} ${enorsedBy}</span> ${skill[2]}
       </li>`;
  });

  
  resultList.innerHTML = listItems.join('');
}

initMenu();
show("skills-page");
initSkillsPage();