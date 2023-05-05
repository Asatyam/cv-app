import React, {Component} from "react";
import styles from './PersonalItems.module.css'


export default class PersonalItems extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const {name,type,value,disabled,handleChange,id} = this.props;
        return(
            <div className={styles[id]}>
                <input type={type} placeholder={name}  name={name} value={value} onChange={handleChange} disabled = {disabled} />
            </div>
        )
    }
} 