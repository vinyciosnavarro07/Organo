import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    //declarando uma variavel css com a cor secundaria para jogar no style
    const css = { backgroundColor: props.corSecundaria }

    return (
        //<section className='time' style={{ backgroundColor: props.corSecundaria}}>   <----outra forma de jogar a cor sem usar a variavel
        //props.colaboradores.lenght > 0 &&  <----- é dessa forma que fazemos uma renderização condicional no react
        //(props.colaboradores.length > 0) && <section className='time' style={css}> exemplo
        //tambem temos essa forma --> usamos o ->?<- e no final da section colocamos :''  ou seja, se o valor for 0 retorne uma string vazia
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            {/* usando da forma sem declarar uma variavel const para jogar a cor da borda no exemplo abaixo */}
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        :''
    )
}

export default Time