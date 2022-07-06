import Tooltip from "./ui/tooltips";
import Dropdown from "./ui/dropdown";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//  create a dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
