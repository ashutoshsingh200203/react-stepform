import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@mui/material"

export default function Basic() {
  type FormInputs = {
    firstName: string
  }
  const { control, handleSubmit } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        name="firstName"
        control={control}
        defaultValue=""
      />


      <input type="submit" />
    </form>
  )
}
