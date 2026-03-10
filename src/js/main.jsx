import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import ButtonActivo from './components/button';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let contador;
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderizar=()=>{root.render(
    <React.StrictMode>
      <Home digito1={num1}
        digito2={num2}
        digito3={num3}
        digito4={num4}
        digito5={num5}
        digito6={num6} />
      <ButtonActivo onReiniciar={reiniciar}
      onParar={parar} />
    </React.StrictMode>,)}



const iniciar=()=>{

  contador = setInterval(function () {
  
  num1 < 9 ? num1++ : num1 = 0;
  num1 === 0 && (num2 < 9 ? num2++ : num2 = 0)
  num1 === 0 && num2 === 0 && (num3 < 9 ? num3++ : num3 = 0)
  num1 === 0 && num2 === 0 && num3 === 0 && (num4 < 9 ? num4++ : num4 = 0)
  num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && (num5 < 9 ? num5++ : num5 = 0)
  num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0 && (num6 < 9 ? num6++ : num6 = 0)


renderizar();
  
 }, 1000)}

const parar = () => {
  clearInterval(contador);
};

const reiniciar = () => {
  clearInterval(contador)
  num1 = 0;
  num2 = 0;
  num3 = 0;
  num4 = 0;
  num5 = 0;
  num6 = 0;
iniciar();
renderizar();

}
renderizar();
iniciar();
