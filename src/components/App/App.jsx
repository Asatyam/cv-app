import React, {Component} from "react";
import Header from "../Header/Header";
import './App.module.css'
import Container from "../Container/Container";
export default class App extends Component{
    constructor()
    {
        super();
    }

    render(){
        return (
            <>
            <Header/>
            <Container/>
            </>
        )
    }
}