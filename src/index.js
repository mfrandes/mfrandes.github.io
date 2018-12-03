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

function initSkillsPage() {
  var skills = [
    { name: 'js', endorsements: 7, endorsedBy: 'Andrei' },
    { name: 'Html', endorsements: 6, endorsedBy: '' },
    { name: 'css', endorsements: 2, endorsedBy: '' }
  ];
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

initMenu();
$('#skills-page').fadeIn();
initSkillsPage();