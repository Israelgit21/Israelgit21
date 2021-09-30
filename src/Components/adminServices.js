import React, { useState } from "react";
import "./adminCars.css"
import { inputService, getServices, deletarService } from "./api/axios";


export default function AdminServices() {

const [lista, setLista] = useState();

 const [name, setName] = useState()
 const [price, setPrice] = useState()
 const [quota, setQuota] = useState()
 const [image, setImage] = useState()



const handleSubmit = (event) => {
    event.preventDefault()
    const data = { name: name, price: price, quota: quota, image: image}
    inputService(data)
}

const listar = async() => {
    const result = await getServices()
    setLista(result)
}

const deletar = async (id) => {
    deletarService(id)
    const result = await getServices()
    setLista(result)

}


return (
 <div>
        <form className="admin-cars-container" onSubmit={handleSubmit}>
            <h1>Service input system:</h1>
            <label> Enter your Service:</label>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
           
            <label> Enter price service:   </label>
            <input type="number" onChange={(event) => setPrice(event.target.value)}/>
            <label> Enter your quota service:   </label>
            <input type="number" onChange={(event) => setQuota(event.target.value)}/>
            <label> Enter your image Service:   </label>
            <input type="text" onChange={(event) => setImage(event.target.value)}/>
          
            <button type="submit" className="btn-send-database">Send new Database </button>
        </form>

        <button onClick={() => listar()} className="btn-products">Get Services</button>
       
        {lista && (lista.data?.map(element => {
        return (
            <div className="container-principal" onClick={() => deletar(element.id)}>
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
        

)



}