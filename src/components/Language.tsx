import { Controller, Control } from "react-hook-form"
import {TextField} from "@mui/material"
import { IFormInput } from "./Home";

interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Language: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <Controller
        name="sscBoard"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="sscBoard" margin='dense' error={!!errors.sscBoard} helperText={errors.sscBoard ? errors.sscBoard.message : ''} />}
      />

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="First name" margin='dense' error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} />}
      />


      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="First name" margin='dense' error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} />}
      />
    </>
  )
}

export default Language ;