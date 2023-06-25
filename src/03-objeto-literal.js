
//


const persona = {
    nombre: 'tony',
    apellido : 'stark',
    edad: 45, 
    direccion : {
       ciudad : ' new york',
       zip: '555563532' ,
       lat: '4654622.45' ,
       lng: '45452',


    }

   
};


console.log( persona );


const persona2 = {...persona };


 persona2.nombre = 'peter';