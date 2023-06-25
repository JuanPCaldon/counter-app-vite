

//funciones en js

const saludar= function(nombre){
  
    
    return `hola ${ nombre}`;


};

//const saludar2 = (nombre)=>{

  //  return `hola ${nombre}`;

//};


//const saludar3 = (nombre) => `hola, ${nombre}`



//console.log(saludar('goku'));
//console.log(saludar2('vegeta'));
//console.log(saludar3('goku'));



export const getuser = () =>{
return{
 Uid:'ABC13274',
 username: 'el_papi41564'

}

};
//console.log( getuser());



//tarea 

//2. retornar  un objeto implicito
//3. pruebas
export const  getusuarioactivo = (nombre)=> ({
    
     uid: 'ABC125',
     username: nombre,

});

//const usuarioactivo = getusuarioactivo('fernando');
//console.log( usuarioactivo);

