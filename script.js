function showTab(tabName) {
  var tabButtons = document.getElementsByClassName("tab");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  document.querySelector(".tab[data-tab='" + tabName + "']").classList.add("active");
}
