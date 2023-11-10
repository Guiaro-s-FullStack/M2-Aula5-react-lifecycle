import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    console.log('Estou montando o componente')
  }
  componentDidMount() {
    console.log('Componente foi montado')
  }
  componentDidUpdate() {
    console.log('Componente atualizado')
  }

  componentWillUnmount() {
    console.log('Componente foi desmontado')
  }

  render() {
    console.log('Componente foi renderizado')
    return <div>Olá {this.props.name}</div>
  }
}

export default ClassComponent
