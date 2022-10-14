function Evento({numero}){
    function meuEvento(){
        console.log(`Evento ${numero} ocorreu!`);
    }
    return (
        <div>
            
            <button onClick={meuEvento}>Evento</button>
        </div>
    )
}

export default Evento

