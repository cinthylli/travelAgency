import React, { Component } from 'react'
import { Icon, Input } from 'semantic-ui-react'

const InputGeneral = (props) => (
    <div>
      <Input 
        
        placeholder={props.placeholder || "Ingresa aqui tus datos"} 
        iconPosition={props.iconPosition || 'left'} 
        focus={props.focus ||  false}
        size={props.size || "big" }
        inverted={props.inverted  || true}
        type={ props.type || "text"}
        minlenght={ props.minlenght || "2"}
        
      >
        <input />
        <Icon name={props.iconName || ""} />
      </Input>     
    </div>
  )

  export default InputGeneral