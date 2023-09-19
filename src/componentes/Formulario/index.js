import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setnomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, funcao, imagem, time )
        aoCadastrar({
            nome,
            funcao,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o seu card de jogador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='NickName'
                    placeholder='Digite seu nick... '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Função' 
                    placeholder='Digite sua Função... '
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}/>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem... '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento => {
                evento.preventDefault()
                cadastrarTime({
                    nome: nomeTime,
                    cor: corTime
                })
            })}>
                <h2>Preencha os dados para criar um novo Time.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time... '
                    valor={nomeTime}
                    aoAlterado={valor => setnomeTime(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Cor' 
                    placeholder='Digite a cor '
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
               
                
                <Botao texto='Criar Time' />
            </form>
        </section>
    )
}

export default Formulario