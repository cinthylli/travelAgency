import React from 'react'
import { Card, Icon, Container } from 'semantic-ui-react'

const CardGeneral = (props) => (
    <Container>
        <Card
            image={props.photo || '/images/huacalera.jpg'}
            header={props.name || 'Elliot Baker'}
            meta={<a>
                <Icon color='teal' name='map marker alternate' />
                {props.city || 'Cali'},
                {props.country || 'Colombia'}
            </a>}
            description={props.description || 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'}
            extra={
                <>   
                    <a>
                        <Icon bordered inverted color='teal' name='time' />
                        {props.availabilityFrom || '16'}
                    </a>
                    <a>
                        <Icon bordered inverted color='teal' name='time' />
                        {props.availabilityTo || '16'}
                    </a>
                    <a>
                        <Icon bordered inverted color='teal' name='bed' />
                        {props.rooms || '16'}
                    </a>
                    
                    <a>
                    <Icon bordered inverted color='teal' name='dollar' />
                        {props.price === 1 ? '$' :  props.price === 2 ? '$$' : props.price === 3 ? '$$$' : "$$$$" || ''}
                    </a>
                    <a>
                    <Icon bordered inverted color='teal' name='world' />
                        {props.language || 'ES'}
                    </a>   
            </>
            }
        />
    </Container>
)

export default CardGeneral