document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tablinks");
  for ( let tab of tabs ) {
    tab.addEventListener( 'click', (evt) => {
      // Declare all variables
      let i, tabcontent, tablinks;
      // Get all elements with class="tabcontent" and hide them
      tabContents = document.querySelectorAll(".tabcontent");
      for ( let tab of tabContents ) {
        tab.style.display = "none";
      }
      // Get all elements with class="tablinks" and remove the class "active"
      tabLinks = document.querySelectorAll(".tablinks");
      for ( let tabLink of tabLinks ) {
        tabLink.className = tabLink.className.replace(" active", "");
      }
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(`${evt.target.id}-details`).style.display = "block";
      evt.currentTarget.className += " active";
    })
  }
});