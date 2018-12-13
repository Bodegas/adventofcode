const input = document.getElementsByTagName("pre")[0].innerHTML;
const regex = /(.*)\n/g;
let match;
let list = [];
while ((match = regex.exec(input))) {
  list.push(match[1]);
}

const found = {
  two: 0,
  three: 0
}

let regExpChar = null;
let twoFound = false;
let threeFound = false;
for (let i=0; i<list.length; i++) { 
  const original = list[i];
  twoFound = false;
  threeFound = false;
  for (let j=0; j<original.length; j++) {
    regExpChar = new RegExp(original[j], "g");
    if (original.match(regExpChar).length == 2 && !twoFound) {
      twoFound = true;
      found.two = found.two+1;      
    }
    if (original.match(regExpChar).length == 3 && !threeFound) {
      threeFound = true;
      found.three = found.three+1;
    }
    if (twoFound && threeFound) {
      continue;
    }
  }
}
console.log(found.two * found.three);
