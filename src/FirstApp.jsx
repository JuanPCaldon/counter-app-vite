import  PropTypes  from 'prop-types';

//fragmento <> </>

const NewMesage={
 
    message : 'hola mundo',
    tittle :  'juan pablo',


};   

//const imprimir= function prueba(){

//    return (`hola soy juan ${ 2 + 2}`);



//};

export  function FirstApp ( {tittle, subtittle})  {
  
   
    
   
     
     return ( 
        <>

        <h1 data-testid="test-tittle"> {tittle} </h1>

        {/* <h1>{ JSON.stringify( NewMesage) }</h1> */}
        <p> {subtittle } </p>
        
        </>
        
       
     );


}

FirstApp.propTypes = {

    tittle: PropTypes.string.isRequired,
    //subtittle:PropTypes.number.isRequired,


}

FirstApp.defaultProps = {
 tittle:'no hay titulo',
 //subtittle:'no hay subtitulo',
 name: 'juan pinilla',
  


}