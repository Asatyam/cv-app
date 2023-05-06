import React, {Component} from "react";
import PersonalItems from "./PersonalItems/PersonalItems.jsx";
import styles from './Personal.module.css'

export default class Personal extends Component{

    constructor(){
        super()

        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);

         this.state = {
            first:"",
            last:"",
            email:"",
            phone:"",
            address:"",
            disabled:false,
    }
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
            first:"",
            last:"",
            email:"",
            phone:"",
            address:"",
        })
    }

    render(){
        const personalItems = [{
            id:"first",
            type:"text",
            name:"First Name"
        },
        {
            id:"last",
            name:"Last Name",
            type:"text"
        },{
            id:"phone",
            name:"Phone",
            type:"tel"
        },{
            id:"email",
            name:"Email",
            type:"email"
        },{
            id:"address",
            name:"Address",
            type:"textarea",
        },
    ]
        return(
            <div className={styles.personal}>
                <h2>Personal Information</h2>
                 <div className={styles.buttons}>
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <button className={styles.edit} onClick={this.handleEdit}>{this.state.disabled ? <img src = "/edit.svg" alt = "" /> : <img src = "/save.svg" alt = ""/>}</button>
                   { !this.state.disabled &&  <button onClick={this.handleReset} className={styles.reset} > <img src="/delete.svg" alt="" /> </button>}
                </div>
                {personalItems.map((item)=><PersonalItems key={item.id} name={item.id} value = {this.state[item.id]}  handleChange = {this.handleChange} type={item.type} placeholder = {item.name} disabled = {this.state.disabled} />)}
               
            </div>
        )
    }
}