function ejecutarFuncion(fn) {
  if( fn() === 1){
    return true;
  }else{
    return false;
  }
}

console.log(
  ejecutarFuncion( function(){
    console.log("Funcion Anonima Ejecutada");
    return 0;
  })
);



( function(){
  var a = 20;
  
  console.log( a );

  function cambiarA(){
    a = 10;
  }

  cambiarA();

  console.log(a);
})();