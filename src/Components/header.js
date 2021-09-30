import React from "react";
import Button from "./button";
import './header.css'
import Powerslap from "./videos/projeto_react_cars.mp4"


export default function Header() {

    return (
        <div className="hero-container">

        <video autoPlay loop muted>
            <source src={Powerslap} type="video/mp4"/>
        </video>
        <h1 className="typing-animation">Adventure Awaits!!!</h1>
        <p> What are you waiting for? </p> 
        <div className="hero-btns"> 
       <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Sign-Up</Button>
       
      
        </div>
        </div>
    )
}