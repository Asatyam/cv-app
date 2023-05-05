import React, {Component} from "react";
import PersonalItems from "./PersonalItems/PersonalItems.jsx";
import styles from './Personal.module.css'

export default class Personal extends Component{

    constructor(){
        super()
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
               
                {personalItems.map((item)=><PersonalItems key={item.id} name={item.id} value = {item.name} type={item.type} />)}
                
            </div>
        )
    }
}