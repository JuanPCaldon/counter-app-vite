import { getHeroeByIdAsync } from "../../src/09-promesas";

describe('pruebas en 09-promesas',()=>{


  test('debe retornar una promesa',(done)=>{



      const id = 1;

      getHeroeByIdAsync(id)
      
      .then(hero=>{

         expect(true).toBe(false);




          done();

             

      })










  });




});