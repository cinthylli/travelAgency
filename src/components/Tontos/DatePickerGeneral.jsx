import React from 'react'
import { Input } from 'semantic-ui-react'

const DatePickerGeneral = (props) => (

  <Input
    className="input"
    action={{
      color: 'teal',
      labelPosition: 'left',
      icon:'sign-in',
      content: 'Checkout',
    }}
    actionPosition='left'
    placeholder='Search...'
    type="date"
    size={props.size || "small"}
    name="datePicker"
    onChange={props.onChange}
    value={props.startDay || ""}
  />
  
)

export default DatePickerGeneral
