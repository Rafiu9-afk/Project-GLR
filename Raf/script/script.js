var buttons = document.querySelectorAll('input[type="button"]');
var Quotes = [
  "Grafisch Lyceum Project!",
  "This is a demo!", 
  "Work in progress...", 
  "Minecraft!",
  "The only limit is your imagination"
];

function displayQuote() {
  var num = Math.floor(Math.random() * 5);
  document.getElementById("quote").innerHTML = Quotes[num];
}



function CloseSelection(id) {    
  window.returnValue = id;
  window.close();
}