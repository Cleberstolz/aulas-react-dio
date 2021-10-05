import React from "react";
import mock from "../mock";
import Button from "../components/Button";

const App = () => {

    const handleClick = (id) => {
        console.log('deletar cliente')
        alert(`ID do cliente ${id}`)
    } 

    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}>X Deletar Cliente</Button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return (

        <div>
            <p>Digital Innovation One</p>
            <div>
                <ul>
                    {mock.map(renderCustomer)}
                </ul>
            </div>
        </div>
    )
}

export default App;