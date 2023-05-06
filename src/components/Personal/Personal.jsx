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
                    <button className={styles.edit} onClick={this.handleEdit}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E57373" d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718C43.139,10.526,43.139,9.625,42.583,9.067"/><path fill="#FF9800" d="M4.465 21.524H40.471999999999994V29.535H4.465z" transform="rotate(134.999 22.469 25.53)"/><path fill="#B0BEC5" d="M34.61 7.379H38.616V15.392H34.61z" transform="rotate(-45.02 36.61 11.385)"/><path fill="#FFC107" d="M6.905 35.43L5 43 12.571 41.094z"/><path fill="#37474F" d="M5.965 39.172L5 43 8.827 42.035z"/></svg></button>
                   { !this.state.disabled &&  <button onClick={this.handleReset} className={styles.reset} > <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="nyvBozV7VK1PdF3LtMmOna" x1="18.405" x2="33.814" y1="10.91" y2="43.484" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bdef"/><stop offset="1" stop-color="#1ea2e4"/></linearGradient><path fill="url(#nyvBozV7VK1PdF3LtMmOna)" d="M39,10l-2.835,31.181C36.072,42.211,35.208,43,34.174,43H13.826	c-1.034,0-1.898-0.789-1.992-1.819L9,10H39z"/><path fill="#0176d0" d="M32,7c0-1.105-0.895-2-2-2H18c-1.105,0-2,0.895-2,2c0,0,0,0.634,0,1h16C32,7.634,32,7,32,7z"/><path fill="#007ad9" d="M7,9.886L7,9.886C7,9.363,7.358,8.912,7.868,8.8C10.173,8.293,16.763,7,24,7s13.827,1.293,16.132,1.8	C40.642,8.912,41,9.363,41,9.886v0C41,10.501,40.501,11,39.886,11H8.114C7.499,11,7,10.501,7,9.886z"/></svg> </button>}
                </div>
                {personalItems.map((item)=><PersonalItems key={item.id} name={item.id} value = {this.state[item.id]}  handleChange = {this.handleChange} type={item.type} placeholder = {item.name} disabled = {this.state.disabled} />)}
               
            </div>
        )
    }
}