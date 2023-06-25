

describe( 'pruebas  ',() => {
    
// 1. inicializamos 

const message1 = 'hola mundo';


//2.estimulo

const message2 = message1.trim();


//3. observar el comportamiento esperado

expect(message1).toBe(message2);
   


} );