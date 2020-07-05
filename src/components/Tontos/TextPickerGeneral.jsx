import React from 'react'
import { Input } from 'semantic-ui-react'

const TextPickerGeneral = (props) => (
  <Input
    action={{
      color: 'teal',
      labelPosition: 'left',
      icon:'map marker alternate',
      content: 'Pais',
    }}
    actionPosition='left'
    placeholder='Buscando...'
    defaultValue={props.defaultValue}
    type="search"
  />
)

export default TextPickerGeneral
