
import react from "react"



function ButtonActivo({onReiniciar, onParar }){
    return(<div id="containerButton"><button id="button" type="button" onClick={onReiniciar}>REINICIAR</button>
    <button id="butonParar" type="button" onClick={onParar}>PARAR</button>
   </div>
        
    )
}



export default ButtonActivo;