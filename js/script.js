function openFunction() {
  let aside_menu = document.getElementById("aside-menu").value;

  document.getElementById("aside-menu").style.width = "165px";
  document.getElementById("openFunction").style.left = "175px";
   document.getElementById("aside-menu-data").style.display = "block"
}

//   if ((document.getElementById("aside-menu").style.width = "165px")) {
//     document.getElementById("aside-menu-data").style.transition = "all 2s";
//     document.getElementById("aside-menu-data").style.display = "block";
//   }
// }

function closeFunction() {
  document.getElementById("aside-menu").style.width = "0px";
  document.getElementById("openFunction").style.left = "10px";
  document.getElementById("aside-menu-data").style.display = "none";
}
