"use strict";

let userName = prompt("enter user name", "");

if (userName == "Admin") {
  let password = prompt("enter password", "");
  if (password == "TheMaster") {
    alert("welcome!");
  } else if (password == '' || password == null) {
    alert("canceled");
  } else {
    alert("wrong password");
  }
} else if (userName == '' || userName == null) {
  alert("canceled");
} else {
  alert("i dont know you");
}
