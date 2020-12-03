var array = [
  true,
  {
    nombre:"rafael",
    apellido:"martinez"
  },
  function(){
    console.log("Estoy viviendo dentro de un arreglo");
  },
  function(persona){
    console.log(persona.nombre +" "+persona.apellido);
  },
  [
    "Rafa", 
    "Karla", 
    "Yohanan",
    [
      "Juan",
      "Pedro",
      "Dilcia",
      function(){
        console.log(this);
      }
    ]
  ]
];

console.log(array);
console.log("primera posicion "+ array[0]);
console.log("segunda posicion "+ array[1].nombre +" "+array[1].apellido);

//Imrpimir funcion anonima
array[2]();
array[3](array[1]);

console.log(array[4][2]);
console.log(array[4][3][1]);

var arreglo2 = array[4][3];
arreglo2[1] = "Pedra";
console.log(arreglo2);

arreglo2[3]();