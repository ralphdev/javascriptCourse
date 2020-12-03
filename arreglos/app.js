var array = [1,2,3,4,5];

console.log(array);

//funcion reverse
array.reverse();
console.log(array);

//funcion map - parecido a foreach
array = array.map(function(element){
  element *= 2;
  return element;
});

console.log(array);

//funcion Math
array = array.map(Math.sqrt);
console.log(array);

//funcion join
array = array.join("|");
console.log(array);

//funcion split
array = array.split("|");
console.log(array);

//funcion push
array.push("6");
console.log(array);

//funcion unshift
array.unshift("0");
console.log(array);

//funcion toString
array.toString();
console.log(array);

//funcion pop
var elimine = array.pop();
console.log(array, elimine);

//funcion splice
array.splice(1,3, "10", "30");
console.log(array);

//funcion slice
array.slice(0, 4);
console.log(array);