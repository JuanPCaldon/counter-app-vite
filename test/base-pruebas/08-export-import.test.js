import { getHeroeById, getHeroesByOwner } from "../../src/08-export-import";



describe('pruebas en 08-export-import',()=>{

    test('debe retornar un heroe por ID',()=>{

                const id = 1 ;

                const hero = {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'


                };


                const test = getHeroeById( id );


                expect (test).toEqual(hero)
            });  


    test('debe retornar un heroe por owner',()=>{
            
              const owner1 = 'DC';

              const owner2= 'Marvel';
         



              const heroDC = [
              {  id: 1,
                name: 'Batman',
                owner: 'DC'
            },
        
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'}

              ]


              const ownerDC = heroDC.length


              const test1 = getHeroesByOwner(owner1)
              console.log(test1.length);

              expect(test1).toEqual(heroDC);
              expect(test1.length).toEqual(ownerDC);




              






        
        
    
    





    });



});