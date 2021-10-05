import React from "react";
import Button from "./Button.js";

const ButtonA  = <button>Historico de clientes</button>
const ButtonB  = <button>Cadastrar clientes</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botao para visualizar o Historico
            <br/>
            {ButtonA}
        </div>
    )
    
    const renderAddCustomer = () => (
        <div>
            Clique no botao para adicionar um cliente
            <br/>
            {ButtonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) {
            return null
        }
        return (
            <div>
                Cliente: Cleberson Stolz
            </div>
        )
    }

    return (

        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D.</p>
            <div>webpack</div>
            <br/>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            {showCustomer()}
        </div>
    )
}

export default App;