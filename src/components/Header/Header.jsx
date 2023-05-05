import React, {Component} from "react";
import styles from './Header.module.css'


export default class Header extends Component{
    constructor(){
        super()
    }

    render()
    {
        return(
            <div className={styles.header}>
                <h1>CV-APPLICATION</h1>
            </div>
        )
    }
}