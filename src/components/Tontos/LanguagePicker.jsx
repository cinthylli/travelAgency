import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Inglés', text: 'EN - Inglés', value: 'Inglés' },
  { key: 'Español', text: 'SP - Español', value: 'Español' },
]

const LanguagePicker = (props) => (
  <Dropdown
  button
  className='icon'
  floating
  labeled
  icon='world'
  options={languageOptions}
  search
  text={ props.value ||'Select Language'}
    
  />
)

export default LanguagePicker