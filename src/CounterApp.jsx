
import { useState } from 'react';
import  PropTypes  from 'prop-types';






export function CounterApp ({value}){

  const[counter,setcounter] = useState(value);

            function handleadd () {

                setcounter(counter + 1);


            }

            function handlesus () {

                setcounter(counter - 1);

            }
            function handlereset () {

                setcounter(value);


            }







         

 return (

    <>  
                
                <h1>CounterApp </h1>
                    <h2> { counter }</h2>
                        <button onClick={ handleadd  }> +1 </button>
                        <button onClick={ handlesus } > -1 </button>
                        <button onClick={ handlereset }> Reset </button>
                    
            </>


 );
 
 
}



CounterApp.propTypes = {

    
    value:PropTypes.number

}