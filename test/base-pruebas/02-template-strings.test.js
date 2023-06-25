
import {getsaludo} from '../../src/02-template-strings'

describe('pruebas en 02-template-strings',() => {

    test('getSaludo debe retornar "hola juan"',()=>{



        const name = 'juan pablo';

        const message = getsaludo(name);


        expect(message).toBe(`hola ${ name }`);

        

         

    })


});