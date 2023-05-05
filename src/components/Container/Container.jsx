import React, {Component} from "react";
import Personal from "../Personal/Personal";
import styles from './Container.module.css'

export default class Container extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={styles.container}>
            <Personal/>
            </div>
            
        )
    }
}