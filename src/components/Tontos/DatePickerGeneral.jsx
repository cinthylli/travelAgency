import React from 'react'
import { Input } from 'semantic-ui-react'

const DatePickerGeneral = (props) => (
  <Input
    action={{
      color: 'teal',
      labelPosition: 'left',
      icon:'sign-in',
      content: 'Checkout',
    }}
    actionPosition='left'
    placeholder='Search...'
    defaultValue={props.startDay}
    type="date"
  />
)

export default DatePickerGeneral
