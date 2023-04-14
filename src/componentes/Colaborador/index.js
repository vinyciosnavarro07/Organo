import './Colaborador.css'

//podemos usar o props como os parametros e chamar, props.nome e etc ou podemos 
//passar direto como parametro o nome
//const Colaborador = (props) => { props.nome, props.imagem...}
//const Colaborador = ( nome, imagem, cargo, corDeFundo) => {}
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return(<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador