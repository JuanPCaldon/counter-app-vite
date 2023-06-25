 
import  heroes from '../src/data/heroes';

// find funciona para un numero
export const getHeroeById =(id) =>{
    
    return heroes.find((heroes)=> heroes.id==id );


};

// filter
export const getHeroesByOwner = (owner)  =>{
          
    return heroes.filter((heroes)=> heroes.owner == owner);
    
};

//console.log(getHeroesByOwner('Marvel'));