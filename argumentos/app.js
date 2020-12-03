var arguments = 10;

function miFuncion(a,b,c,d){
  
  if( arguments.length !== 4){
    console.log("La funcion nececita 4 parametros");
    return;
  }
  console.log( a + b + c + d);
}



miFuncion(10,23,23,45,45);