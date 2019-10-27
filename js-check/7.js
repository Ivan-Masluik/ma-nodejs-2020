const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];
if (vegetables.includes('cucumber')){
    console.log('vegetables')
}
if (fruits.includes('cucumber')){
    console.log('fruits')
}
switch (true) {
  case vegetables.includes('cucumber'):
    console.log("vegetables")
    break;
  case fruits.includes('cucumber'):
    console.log("fruits")
    break;
  default:
    console.log("Other")
}