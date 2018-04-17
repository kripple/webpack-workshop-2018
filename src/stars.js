import { log } from "./log";

function stars(lines) {
  var string = "";
  for(var i = 0; i < lines; i++) {
    string = string.concat("*");
    log(string);
  }
  
}

export { stars };