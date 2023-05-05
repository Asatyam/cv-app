import React, {Component} from "react";
import Header from "../Header/Header";
import './App.module.css'
export default class App extends Component{
    constructor()
    {
        super();
    }

    render(){
        return (
            <Header/>
        )
    }
}