import { useEffect } from 'react'

//Hook useState / useEffect

const FunctionalComponent = ({ name }) => {
  useEffect(() => {
    console.log('Montei o componente')
  }, [])

  useEffect(() => {
    console.log('Componente atualizado')
  }, [name])

  useEffect(() => {
    return () => {
      console.log('Componente Desmontado')
    }
  }, [])
  return (
    <>
      {console.log('Estou no render')}
      <div>Tchau {name}</div>
    </>
  )
}

export default FunctionalComponent
