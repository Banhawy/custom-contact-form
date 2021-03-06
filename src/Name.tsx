import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, StyledLabel } from './styles'

type Inputs = {
  name: string
}

function Name() {
  const { register, errors } = useFormContext<Inputs>()

  return (
    <div className='first_name_wrapper'>
      <StyledLabel>Name</StyledLabel>
      <StyledInput name='name' ref={register({ required: true })} />
      {errors.name && <p>This field is required</p>}
    </div>
  )
}

export default Name
