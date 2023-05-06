import React, {Component} from "react";
import styles from './PersonalItems.module.css'


export default class PersonalItems extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const {name,type,value,disabled,handleChange,id,placeholder} = this.props;
        return(
            <div className={styles[name]}>
                <input type={type} placeholder={placeholder}  name={name} value={value} onChange={handleChange} disabled = {disabled} />
            </div>
        )
    }
} 