
//desestructuracion
//asignacion desestructurante

const persona = {

    nombre: 'tony',
    edad: 45 ,
    clave: 'ironman',
};


//const {nombre, edad , clave } = persona ;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const extraerpersona = ({clave ,nombre,edad, rango = 'capitan'}) => {

  //  console.log(nombre,edad,rango);

  return {

    nombreClave : clave,
    anios: edad,

    latlng:{
        lat:54.285,
        lng:-12.57
 
    }
  }
  

}

const {nombreClave , anios, latlng:{lat,lng}} = extraerpersona(persona);



console.log(nombreClave , anios);
console.log(lat,lng);

