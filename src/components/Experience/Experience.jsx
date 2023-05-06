/* eslint-disable @next/next/no-img-element */
import React, {Component} from "react";
import style from "./Experience.module.css"
import Items from "../Items/Items";

export default class Experience extends Component{
    constructor(){
        super()

        this.state = {
            uni:"",
            city:"",
            degree:"",
            from:"",
            to:"",
            disabled:false,
            active:1,
    }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
     handleEdit(e){
        this.setState({
            disabled:!this.state.disabled,
        })
        // e.target.textContent = e.target.textContent==="Edit"?"Save":"Edit";
        
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleReset(){
        this.setState({
            uni:"",
            city:"",
            degree:"",
            from:"",
            to:"",
            disabled:false,
        })
        console.log(this.state.active);
    }
   
    render(){
        const experienceItems = [
            {
            id:"company",
            type:"text",
            name:"Company"
        },
        {
            id:"position",
            name:"Position",
            type:"text"
        },{
            id:"tasks",
            name:"Tasks",
            type:"text"
        },{
            id:"from",
            name:"From",
            type:"text"
        },{
            id:"to",
            name:"To",
            type:"text",
        },
        ]
        return (
            <div className={style.experience}>
                <h2>Work Experience</h2>
                <div className={style.buttons}>
                    <button className={style.edit} onClick={this.handleEdit}>{this.state.disabled ? <img src = "/edit.svg" alt = "" /> : <img src = "/save.svg" alt = ""/>}</button>
                   { !this.state.disabled &&  <button onClick={this.handleReset} className={style.reset} > <img src="/delete.svg" alt="delete" /> </button>}
                </div>
                    {experienceItems.map((item)=><Items key={item.id} name={item.id} value = {this.state[item.id]}  handleChange = {this.handleChange} type={item.type} placeholder = {item.name} disabled = {this.state.disabled} />)} 
                 
            </div>
        )
    }
}