import React, { Component } from 'react'

import Card from "../Tontos/Card";
import data from '../../../public/data/data';

import { v4 as uuid } from 'uuid';


export default class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        
    }

    render(){
        return(
            <>
                <main>
                    <h2>Hoteles</h2>
                    {
                        data.map((hotel) => {
                            return <Card {...hotel} 
                                    key={uuid()}
                                     />
                        })
                    }
                    <div className="Hotels">
                        
                        <Card />
                        <Card />
      
                    </div>
                </main>
            </>
        )
    }
}