import React, { useState } from 'react'
import './products.css'
import { getServices } from "../api/axios"


function Services() {

const [lista, setLista] = useState("")

const listar = async() => {
    const result = await getServices()
    setLista(result)
}

return (

    <div>
        <button onClick={() => listar()} className="btn-products">Get Services</button>
        <h1>Confira os nossos serviços!</h1>

        {lista && (lista.data?.map(element => {
        return (
            <div className="container-principal">
                <div className="container-cards">
                    <img src={element.image} alt="serviço"/>
                    <ul className="cards">
                    <li className="car">{element.name}</li>
                    <li className="price">R$<span>{element.price}</span></li>
                    <li className="year">{element.quota}x Quotes to pay</li>
                    </ul>
                </div>
            </div>
        )
    }))}


    </div>

   

)}

export default Services