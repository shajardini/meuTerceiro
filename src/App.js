import React from 'react'
import Primeiro from './Componentes/basicos/Primeiro'
import ComParametro from './Componentes/basicos/ComParametro'
import Fragmento from './Componentes/basicos/Fragmento'
import NumeroAle from './Componentes/basicos/NumeroAle'
import Layout from './Componentes/layout/Layout'
import './App.css'

export default () => {
    
    return (
        <div>
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Layout titulo='Primeiro Teste' color="orange">
                <Primeiro></Primeiro></Layout>

                <Layout titulo="Passando Parâmetros" color='red'>
                <ComParametro titulo="Vivendo perigosamente" subtitulo='Filme passado' /></Layout>
                
                <Layout titulo="Utilizando React.Fragment" color='blue'>
                <Fragmento />
                </Layout>

                <Layout titulo="Número Aleatório" color='green'>
                <NumeroAle min={1} max={10} />
                </Layout>



            </div>
        </div>
    )
}