import React from 'react'
import classnames from 'classnames';
import PropsTypes from 'prop-types'

const  InputGroup= ({
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    onChange
}) =>{
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon}/>
                </span>
            </div>
          <input  className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })} placeholder={placeholder} name={name} value={value} onChange={onChange}  />
          {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}
 
InputGroup.propsTypes={
    name:PropsTypes.string.isRequired,
    placeholder:PropsTypes.string,
    value:PropsTypes.string.isRequired,
    icon:PropsTypes.string,
    error:PropsTypes.string,
    type:PropsTypes.string.isRequired,
    onChange:PropsTypes.func.isRequired
}
InputGroup.defaultProps = {
    type:'text'
}

export default InputGroup;