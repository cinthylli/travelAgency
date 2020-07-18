import React, { Component } from 'react'
import Filters from '../Filters/Filters';
import Hotels from '../Hotels/Hotels'
import VideoFullScreen from '../VideoFullScreen/VIdeoFullScreen'
import Header from '../Header/Header'
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={
            form: {
                startDay:'',
                endDay:'',
                country:'',
                price:'',
            },
        };
    }

    
    handleChange (e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    render() {
        return (
            <>
            {/* <VideoFullScreen/> */}
                <Header/>
                <Filters 
                onChange={this.handleChange}
                formValues={this.state.form}
                 />
                <Hotels />
            </>
        )
    }
}
