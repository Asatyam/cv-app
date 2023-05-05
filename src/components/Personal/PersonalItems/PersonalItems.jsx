import React, {Component} from "react";
import styles from './PersonalItems.module.css'


export default class PersonalItems extends Component{
    constructor(props){
        super(props)

        this.state = {
            [this.props.name]:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [this.props.name]:e.target.value
        })
    }
    render(){
        const {name,type,value} = this.props;
        return(
            <div className={styles[name.toLowerCase()]}>
                <input type={type} placeholder={value} id={name} name={name} value={this.state[name]} onChange={this.handleChange} />
            </div>
        )
    }
} 