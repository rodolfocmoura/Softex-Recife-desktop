import React from 'react';

class NomeDoComponente extends React.Component {

constructor(props){

super(props)

}
    render() {
        return(
        <div>
        <img src={this.props.imagem}/>
        <h3> {this.props.titulo}</h3>  
        <p>{this.props.descricao}</p>
        </div>
        )
    }
}

export default NomeDoComponente






