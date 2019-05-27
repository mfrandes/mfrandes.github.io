function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $('.page-block').hide();
      var page = this.getAttribute('data-page');
      $('#' + page + "-page").fadeIn();
    };
  }
}

function displaySkills(skills) {
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function (skill) {
    var enorsedBy = '- Endorsed by';
    if (skill.endorsedBy == "") {
      enorsedBy = "";
    }
    var name = skill.name.toUpperCase();
    return `<li>${name}
       <span style="color: gray">- ${skill.endorsements} ${enorsedBy}</span> 
       ${skill.endorsedBy}
       </li>`;
  });
  resultList.innerHTML = listItems.join('');
}

function initSkillsPage() {
  console.info(" 1 first step in initSkillsPage")
  $.ajax('data/skills.json').done(function (skills) {
    console.info('2 file data', skills);
    displaySkills()
  })
  console.info("3 last step in initSkillsPage")
  //displaySkills(skill);
}

initMenu();
$('#skills-page').show();


console.info('start')
initSkillsPage();
console.info('end')