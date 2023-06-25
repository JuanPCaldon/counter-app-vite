
// promesas
import { getHeroeById } from '../src/08-export-import';
import { heroes } from "../src/data/heroes";

//const promesa = new Promise( (resolve, reject) =>{

// setTimeout(() => {
     // resolve();

//    const heroes = getHeroeById(2);
    //resolve(heroes);
//    reject('No se  pudo encontrar el Heroe');

// }, 2000);

//} );

 
//promesa.then((heroes)=>{
   
//    console.log('heroe', heroes);

//});


//promesa.catch((err) => console.warn( err) );


export const getHeroeByIdAsync = (id) => {

    return  new Promise( (resolve, reject) =>{

       setTimeout(() => {
     // resolve();

      const heroes = getHeroeById(id);
       
      if (heroes)
         resolve(heroes);
         
      else
        reject('No se  pudo encontrar el Heroe');
       

    }, 1000);



} );

}



//getHeroeByIdAsync(5)
//.then( console.log)
//.catch( err=> console.warn(err))
//.catch(console.warn)