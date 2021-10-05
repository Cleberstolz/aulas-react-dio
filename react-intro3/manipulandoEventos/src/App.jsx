import React from "react";

const showEvent = () => {
    console.log('evento clicado')
}

const Button = <button onClick={showEvent}>Mostrar Evento</button>

const App = () => {

    return (

        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D.</p>
            { Button }
        </div>
    )
}

export default App;