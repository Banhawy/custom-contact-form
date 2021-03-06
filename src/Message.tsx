import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledMessageInput, StyledLabel } from './styles'

type Inputs = {
  message: string
}

function Message() {
  const { register, errors } = useFormContext<Inputs>()

  return (
    <div className='message_wrapper'>
      <StyledLabel>Message</StyledLabel>
      <StyledMessageInput
        name='message'
        className='message_input'
        ref={register({ required: true, minLength: 55 })}
      />
      {errors.message && errors.message.type === 'required' && (
        <p className="error">This field is required</p>
      )}
      {errors.message && errors.message.type === 'minLength' && (
        <p className="error">We'd like to hear more. Please elaborate more for the message to be sent.</p>
      )}
    </div>
  )
}

export default Message
