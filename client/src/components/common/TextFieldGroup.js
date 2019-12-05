import React from 'react'
import classnames from 'classnames';
import PropsTypes from 'prop-types'

const  TextFieldGroup= ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) =>{
    return (
        <div className="form-group">
          <input type={type} className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled} />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}
 
TextFieldGroup.propsTypes={
    name:PropsTypes.string.isRequired,
    placeholder:PropsTypes.string,
    value:PropsTypes.string.isRequired,
    info:PropsTypes.string,
    error:PropsTypes.string,
    type:PropsTypes.string.isRequired,
    onChange:PropsTypes.func.isRequired,
    disabled:PropsTypes.string
}
TextFieldGroup.defaultProps={
    type:'text'
}
export default TextFieldGroup;