function Persona(){
  this.nombre = "Rafael";
  this.apellido = "Martinez";
  this.edad = "28";
  this.pais = "Panamá";
}

Persona.prototype.imprimirInfo = function(){
  console.info(this.nombre + " " + this.apellido + " (" +this.edad+")" );
}

var rafa = new Persona();

Number.prototype.esPositivo = function () {
  if(this > 0){
    return true;
  }
  else{
    return false;
  }
}

console.log(rafa);