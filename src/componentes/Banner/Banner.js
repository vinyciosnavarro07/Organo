import './Banner.css'

export const Banner = () => {
    //isso é um JSX, é como o React lê isso aqui e transforma em elementos no DOM
    //parece HTML mas não é
    return(
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
        </header>
    )
}