import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes

import {App} from './HeloWorldApp';
import { CounterApp } from './CounterApp';
import {FirstApp} from './FirstApp';



//importar hoja de estilos

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(


    <React.StrictMode>

      {/*<CounterApp value = {50}/>*/}
      <FirstApp tittle='hola soy vegeta'/>     

    </React.StrictMode>




);

