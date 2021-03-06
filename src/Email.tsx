import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, StyledLabel } from './styles'

type Inputs = {
  email: string
}

function Email() {
  const { register, errors } = useFormContext<Inputs>()

  return (
    <div className='email_wrapper'>
      <StyledLabel>Email Address</StyledLabel>
      <StyledInput
        name='email'
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address, please try again!'
          }
        })}
      />
      {errors.email && errors.email.message}
      {errors.email && errors.email.type === 'required' && (
        <p className="error">This field is required</p>
      )}
    </div>
  )
}

export default Email
