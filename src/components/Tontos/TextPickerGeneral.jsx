import React from 'react'
import { Input } from 'semantic-ui-react'

const TextPickerGeneral = (props) => (
  <Input
    action={{
      color: props.color || 'teal',
      labelPosition: props.position || 'left',
      icon: props.icon||'map marker alternate',
      content: props.content || 'Pais',
    }}
    actionPosition='left'
    placeholder='Buscando...'
    defaultValue={props.defaultValue}
    type="search"
    size="large"
  />
)

export default TextPickerGeneral
