// When password field clicked, display nudge message
document.getElementById("passwd").onclick = function(){
  // set password field to red
  document.getElementById("passwd").style.color = "#ff0011";
  // display nudge-info
  document.getElementById("nudge-info").style.display = "inherit";
  // show red open lock
  document.getElementById("open-lock").style.display = "inherit";
}

// When username field clicked, remove nudges
document.getElementById("username").onclick = function(){
  // set password field to white
  document.getElementById("passwd").style.color = "#fff";
  // hide nudge-info
  document.getElementById("nudge-info").style.display = "none";
  // hide red open lock
  document.getElementById("open-lock").style.display = "none";
}

// when the generate password button is clicked, remove messages and show green
document.getElementById("generate").onclick = function(){
  // set password field to white
  document.getElementById("passwd").style.color = "#00c234";
  // close nudge-info
  document.getElementById("nudge-info").style.display = "none";
  // fill password field
  document.getElementById("passwd").value = "h#b$f5x67&F*4082yD&*6h7f9^&D5tg";
  // show green closed lock
  document.getElementById("lock").style.display = "inherit";
  // hide red open lock
  document.getElementById("open-lock").style.display = "none";
}

// exits the nudge and closes all messages
document.getElementById("exit").onclick = function(){
  // set password field to white
  document.getElementById("passwd").style.color = "#00c234";
  // close nudge-info
  document.getElementById("nudge-info").style.display = "none";
  // hide red open lock
  document.getElementById("open-lock").style.display = "none";
}
