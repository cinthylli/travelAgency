import React, { Component } from 'react'

export default class SelectMultiple extends Component{

    constructor(props) {
        super(props)
        
    }

   render(){
       return (
        <>
            <div className="input-field col s12">
                <select >
                <option value="" disabled defaultValue>Descripcion</option>
                {/* <option value="1"> <strong> {props.precio1} </strong> </option>
                <option value="2"> <strong> {props.precio2} </strong> </option>
                <option value="3"> <strong> {props.precio3} </strong> </option>
                <option value="4"> <strong> {props.precio4} </strong> </option> */}
                <option value="1"> 1</option>
                <option value="2"> 1</option>
                <option value="3"> 1 </option>
                <option value="4"> 1 </option>
                </select>
                <label>{props.label}</label>
            </div>   
        </> 
       );
   }


}