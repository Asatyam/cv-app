import React, {Component} from "react";
import PersonalItems from "./PersonalItems/PersonalItems.jsx";
import styles from './Personal.module.css'

export default class Personal extends Component{

    constructor(){
        super()

        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);


         this.state = {
         inputs:{
            first:"",
            last:"",
            email:"",
            phone:"",
            address:"",
        },
        disabled:false,
    }
    }
   
    handleEdit(e){
        this.setState({
            disabled:!this.state.disabled,
        })
        e.target.textContent = e.target.textContent==="Edit"?"Save":"Edit";
    }

    handleChange(e){
        this.setState({
            inputs:{
                first:e.target.value,
                last:e.target.value,
                email:e.target.value,
                phone:e.target.value,
                address:e.target.value,  
            }
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
                {personalItems.map((item)=><PersonalItems key={item.id} name={item.name} value = {this.state.inputs[item.name]}  handleChange = {this.handleChange} type={item.type} id = {item.id} disabled = {this.state.disabled} />)}
                <div className="buttons">
                    <button className="edit" onClick={this.handleEdit}>Save</button>
                </div>
            </div>
        )
    }
}