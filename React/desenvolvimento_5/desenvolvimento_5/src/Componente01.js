import {useState} from 'react'

export default function Propriedades ({props}) {


    const [numero , setNumero] = useState (0)
    

   var teste = ((props)+(numero));

  
    
    return(
        <div>
        <h3>Valor inicial de Props: {props}</h3>
        <h3>{teste}</h3>
        <button onClick={()=>setNumero((num)=> num+1)}>Aumentar/ Numero = {numero}</button>
        <button onClick={()=>console.log(teste)}>Console</button>
        </div>
    )
}