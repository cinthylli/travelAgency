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

    componentDidUpdate(prevProps, prevState) {
        
    }

    render(){
        return(
            <>
                <main> 
                    <h2 className="title">Hoteles</h2>
                    <div className="container__flex">    
                    {
                        data.map((hotel) => {
                            return <Card className="item" 
                                        {...hotel} 
                                        key={uuid()}/>
                        })
                    }
                    </div>
                </main>
            </>
        )
    }
}