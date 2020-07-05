import React, { Component } from 'react'
import './VideoFullScreen.css'

export default class VideoFullScreen extends Component {

    render() {
        return (
            <div className="video__container">
                <video autoPlay="autoPlay" loop="loop" muted  className="myVideo">
                    <source src="/videos/Velero.mp4" type="video/mp4"/>
                </video>
            </div>                       
                            
        )
    }

}