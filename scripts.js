console.log("hi");
function init() {
  console.log("added");

  const publicMenuButton = document.querySelector(
    '[role="menuitem"]:last-child'
  );
  publicMenuButton.classList.add("MENU-BUTTON");
}

window.onload = init;
