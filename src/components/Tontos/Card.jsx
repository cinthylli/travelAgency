import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import '../../App.css'
import { Link } from 'react-router-dom'

const CardGeneral = (props) => (
    <>
        <div className="item">
            <Card
                image={props.photo || ' /images/huacalera.jpg '}
                header={props.name || ' Elliot Baker '}
                meta={<p>
                    <Icon color='teal' name='map marker alternate' />
                    {props.city || ' Cali '},
                    {props.country || ' Colombia '}
                </p>}
                description={props.description || 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'}
                extra={ 
                    <div className="container__flex">
                        {/* <p className="singleSpace item">
                            <Icon className="icon" inverted color='blue' name='time' />
                            {props.availabilityFrom || ' 16 '}
                        </p>
                        <p className="singleSpace item">
                            <Icon  className="icon" inverted color='blue' name='time' />
                            {props.availabilityTo || ' 16 '}
                        </p> */}
                        <p className="singleSpace">
                            <Icon className="icon"  color='teal' name='bed' />
                            {props.rooms || ' 16 '}
                        </p>
                        
                        <p className="singleSpace">
                            <Icon className="icon" color='teal' name='dollar' />
                            {props.price === 1 ? ' $ ' :  props.price === 2 ? '$$' : props.price === 3 ? '$$$' : "$$$$" || '  '}
                        </p>
                        <p className="singleSpace">
                            <Icon className="icon"  color='teal' name='world' />
                            {props.language || 'ES'}
                        </p> 
                    </div> 
                }
            />
        </div>
        
    </>
)

export default CardGeneral