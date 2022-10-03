var num = 0

do{
 
    var clientes = [
        {id: 1, nome: "Bruno", cpf: "123.456.789-11", endereco: "Rua 01", email:"bruno@email.com", telefone:"99999999"},
        {id: 2, nome: "Lucas", cpf: "123.456.789-11", endereco: "Rua 02", email:"lucas@email.com", telefone:"99999999"}
    ]    
    var menu = parseInt(window.prompt(`Escolha a opção desejada:
    1 - Cadastrar novo cliente;
    2 - Consultar um cliente pelo id;
    3 - Excluir um cliente pelo id;
    4 - Listar todos os clientes cadastrados
    5 - Sair do sistema
    `))

    switch(menu){
        case 1:{
            //Cadastrar um novo cliente
            var novoCliente = {
                id: parseInt(window.prompt("Digite o id do cliente: ")),
                nome: window.prompt("Digite o nome do cliente: "),
                cpf: window.prompt("Digite o cpf do cliente: "),
                endereco: window.prompt("Digite o endereço do cliente: "),
                email: window.prompt("Digite o email do cliente: "),
                telefone: window.prompt("Digite o telefone do cliente: ") 
            }
            clientes.push(novoCliente)
            console.table(clientes)
        };break;

        case 2:{
            //consultar um cliente pelo id
            var buscar = parseInt(window.prompt("Digite o id do cliente: "))
            if(clientes.find(i => i.id == buscar)){
                console.table(clientes.find(i => i.id == buscar))
            }else{
                console.log("ID informado não possui cadastro!")
            }
        };break;

        case 3: {
            //Excluir um cliente pelo id
            var id = parseInt(window.prompt("Digite o id do cliente que deseja excluir: ")) 
            if(clientes.find(i => i.id == id)){
                var index = clientes.findIndex(clientes => clientes.id == id)
                clientes.splice(index,1)
                console.table(clientes)
            }else{
                console.log("Id informado não possui cadastro!")
            }
            
        };break;

        case 4:{
            //listar todos os clientes
            console.table(clientes)
        };break;

        case 5: {
            //Sair do sistema
            num += 1

        };break

        default: console.log("Opção invalida!")

        
    }
}while(num == 0)
