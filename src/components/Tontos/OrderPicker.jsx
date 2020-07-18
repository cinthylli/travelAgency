import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const OrderPicker = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item icon='sort alphabet down' text='Nombre de Hotel' />
      <Dropdown.Item icon='sort alphabet down' text='Nombre Ciudad' />
      <Dropdown.Item icon='sort numeric down' text='Precio Descendente' />
      <Dropdown.Item icon='sort numeric up' text='Precio Ascendente' />
      <Dropdown.Item icon='comment alternate' text='Idioma en orden alfabetico' />
    </Dropdown.Menu>
  </Dropdown>
)

export default OrderPicker