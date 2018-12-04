const input = document.getElementsByTagName("pre")[0].innerHTML;
const regex = /(.*)\n/g;
let match;
let list = [];
while ((match = regex.exec(input))) {
  list.push(parseInt(match[1]));
}

let index = 0;
let foundRepeated = false;
let results = [0];
while(!foundRepeated) {
  if (index > list.length-1) {
    index = index%list.length;
  }
  const result = results[results.length-1] + list[index];
  if (results.includes(result)) {
    foundRepeated = true;
    console.log(`REPETIDO: ${result}`);
  }
  results.push(result);
  index++;
}
