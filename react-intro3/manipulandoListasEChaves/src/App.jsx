import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Cleberson Stolz',
        skills: ['html', 'Css', 'JavaScript']
    },
    {
        id: 2,
        name: 'Luana Stolz',
        skills: ['html', 'React']
    },
    {
        id: 3,
        name: 'Bruno Codeiro',
        skills: ['go', 'Assembly']
    },
    {
        id: 4,
        name: 'Aline cordeiro',
        skills: ['Reason']
    },
]

const App = () => {

    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
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
                    {listCustomer.map(renderCustomer)}
                </ul>
            </div>
        </div>
    )
}

export default App;