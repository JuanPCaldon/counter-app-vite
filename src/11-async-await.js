


//

//const getImagePromesa = ()=> {
//   const promesa = new Promise ( (resolve, reject) =>{

//      resolve('https:// alskjdlkasdlkjas.com')

//   })
    
//   return promesa;
//}


//getImagePromesa().then(console.log);



export const getImage =async () =>{


    try{

        const apiKey ='TFD1Fcq4oN68BAn2UxCZdnsGacmcG81C'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json(); 
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url ;
    
        document.body.append(img);

        return url;
    



    }
    

    catch(error){

        //console.error(error);
        return 'no se encontro el imagen';


    }
  


  

}


getImage()