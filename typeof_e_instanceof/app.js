function identifica( param ){
  //console.log( typeof param );

  if (typeof param == "function") {
    param();
  } else {
    console.log( param );
  }
}


identifica();