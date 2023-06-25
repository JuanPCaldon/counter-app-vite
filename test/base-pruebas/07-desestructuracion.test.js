import { retornaArreglo } from "../../src/07-deses-arrays";


describe('pruebas en 07-desestructuracion',()=>{
   
    test('debe de retornar un string y un numero ',()=>{

        const [strings , numeros ]= retornaArreglo();


        //expect(strings).toBe('ABC');
        //expect(numeros).toBe(123);

        expect(typeof strings).toBe('string')
        expect(typeof numeros).toBe('number')



         

    });

   



});