function determinarDato( a ){

  if (typeof a === undefined) {
    console.log("A es undefined... no se que hacer");
  }

  if (typeof a === "number") {
    console.log("A es numero");
  }

  if (typeof a === "string") {
    console.log("A es cadena de texto");
  }

  if (typeof a === "object") {
    console.log("A es un objeto... pero tambien puede ser otra cosa");

    if(a instanceof Number){
      console.log("A es un objeto numerico");
    }
  }

  
}

determinarDato({});

var b = new Number();
console.log(b);
determinarDato(b);
