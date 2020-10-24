const greet = name => {
  console.log('Hi ' + name);
}

const greet1 = (name, text) => {
  console.log(text +' '+ name);
}
const greet2 = () => {
  console.log('Hi');
}
const greet3 = name => 'Hi ' + name;

const greet4 = (name, text = 'Bye') => {
  console.log(text +' '+ name);
}
greet('Patrick');
greet1('Patrick', 'Hi');
greet2();
console.log(greet3('Patrick'));
greet4('Patrick');
greet4('Patrick', 'Hi');

function checkInput(cb, ...strings){
  let empty = false;
  for (const txt of strings){
    if (!txt) {
      empty = true;
      break;
    }
  }
  if (!empty) {
    cb();
  };
};

checkInput(
  () => {
    console.log('All not empty!');
}, 'Hi', 'there', 'you', 'boy');