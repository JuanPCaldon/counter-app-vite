import { getuser, getusuarioactivo } from "../../src/05-funciones";

describe('pruebas en 05- funciones',()=>{

   test('getUser debe de retornar un objeto',() =>{


            const testuser = {

                Uid:'ABC13274',
                username: 'el_papi41564'

            }


            const user = getuser();


            expect(testuser).toEqual(user);

    });
     

    test('getUsuarioactivo debe retornar un objeto',()=>{

          const nombre = 'juan pablo';


          const testuser2 = {
            uid: 'ABC125',
            username: nombre 

          }


         const user2= getusuarioactivo( nombre );

         expect(testuser2).toEqual(user2);


    });






});