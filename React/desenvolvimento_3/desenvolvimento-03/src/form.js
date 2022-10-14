function Form (){
    function CadastroUsuario(e){
        e.preventDefault()
        console.log(`Cadastro realizado!`)
    }

    return(
        <div>
            <p>Inscrição: </p>
            <form onSubmit={CadastroUsuario}>
                <div>
                    <input type="text" placeholder="Digite o e-mail" />
                </div>
                <div>
                    <input type="submit" value="Inscrever!"/>
                </div>

            </form>
        </div>
    )
}

export default Form


