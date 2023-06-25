import { getImage } from "../../src/11-async-await";



describe('prueba 11-async-await',()=>{


  test('deberia retornar una url de la imagen',async()=>{



    const url = await getImage();
    console.log(url);






  });





});