import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


 describe('pruebas en <FirstApp/>',()=>{

  /*   test('debe de hacer match con el snapshot',()=>{

     
       const tittle = 'hola soy goku';
       const{container}= render( <FirstApp tittle={ tittle}  /> )
        

       expect(container).toMatchSnapshot();

    });
      */

    test('debe mostrar el titulo en un h1',()=>{


        const tittle = 'hola soy goku';
        const{container,getByText,getByTestId}= render( <FirstApp tittle={ tittle}  /> )
        //expect(getByText(tittle)).toBeTruthy();
        expect(getByTestId('test-tittle').innerHTML).toContain(tittle);
        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(tittle);
 */






    });


  

      



} );