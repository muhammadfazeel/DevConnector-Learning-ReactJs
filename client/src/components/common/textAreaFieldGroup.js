import React from 'react'
import classnames from 'classnames';
import PropsTypes from 'prop-types'

const  TextAreaFieldGroup= ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) =>{
    return (
        <div className="form-group">
          <textarea  className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })} placeholder={placeholder} name={name} value={value} onChange={onChange}  />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}
 
TextAreaFieldGroup.propsTypes={
    name:PropsTypes.string.isRequired,
    placeholder:PropsTypes.string,
    value:PropsTypes.string.isRequired,
    info:PropsTypes.string,
    error:PropsTypes.string,
    onChange:PropsTypes.func.isRequired
}

export default TextAreaFieldGroup;