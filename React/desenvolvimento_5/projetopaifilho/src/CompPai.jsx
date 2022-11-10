import FuncaoFilho from "./ComFilho"
import { useState } from "react"
import React from "react"


export default class FuncaoPai extends React.Component{

constructor(props){
    super(props)
}
    render (
        <div>
        <FuncaoFilho childName={this.state.parentName} />
        </div>
    )
}