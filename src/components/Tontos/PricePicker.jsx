import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: '$ < 20 USD', value: 1 },
  { key: 2, text: '$$ < 40USD', value: 2 },
  { key: 3, text: '$$$ < 200USD', value: 3 },
  { key: 4, text: '$$$$ > 200USD', value: 4 },
]

const PricePicker = () => (
  <Dropdown color='teal' placeholder='Rango de Precio' clearable floating  options={options} selection  basic />
)

export default PricePicker