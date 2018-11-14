function showHomePage() {
    document.getElementById("skills-page").style.display = "none";
    document.getElementById("languages-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
    console.info("Click on home");
  }
  
  function showSkillsPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("languages-page").style.display = "none";
    document.getElementById("skills-page").style.display = "block";
    console.info("Click on skils");
  }
  
  function showLanguagesPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("skills-page").style.display = "none";
    document.getElementById("languages-page").style.display = "block";
    console.info("Click on languages");
  }
  
  document.getElementById("home-menu").onclick = showHomePage;
  document.getElementById("skills-menu").onclick = showSkillsPage;
  document.getElementById("languages-menu").onclick = showLanguagesPage;
  
  
  
  