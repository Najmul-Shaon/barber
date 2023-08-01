var menu_btn = document.getElementById("menu_btn");
var side_nav = document.getElementById("side_nav");
var menu_img = document.getElementById("menu_img");

menu_btn.onclick = function () {
  if (side_nav.style.width == "250px") {
    side_nav.style.right == "0px";
    console.log("clcik");
  } else {
    side_nav.style.right == "-250px";
    console.log("clcik else");
  }
};
