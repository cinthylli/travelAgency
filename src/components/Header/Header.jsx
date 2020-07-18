import React, { Component } from 'react'

export default class Header extends Component { 
  constructor(props) {
    super(props);
   }
    
    render() {
        return (    
        <nav>
        <div >
          <h1>NZ Travel Agency</h1>
          <h3>Desde el dia {this.props.startDay} hasta el dia {this.props.endDay}</h3>
        </div>
      </nav> 
        )
    }

}