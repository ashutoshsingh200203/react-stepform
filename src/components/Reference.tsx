import { Controller, Control } from "react-hook-form"
import { TextField } from "@mui/material"
import { IFormInput } from "./Home";

interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Reference: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <Controller
        name="refrel1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refrel1" margin='dense' error={!!errors.refrel1} helperText={errors.refrel1 ? errors.refrel1.message : ''} />}
      />

      <Controller
        name="refname1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refname1" margin='dense' error={!!errors.refname1} helperText={errors.refname1 ? errors.refname1.message : ''} />}
      />

      <Controller
        name="refphone1"
        control={control}
        render={({ field }) => <TextField {...field} label="refphone1" margin='dense' error={!!errors.refphone1} helperText={errors.refphone1 ? errors.refphone1.message : ''} />}
      />

      <Controller
        name="refrel2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refrel2" margin='dense' error={!!errors.refrel2} helperText={errors.refrel2 ? errors.refrel2.message : ''} />}
      />

      <Controller
        name="refname2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refname2" margin='dense' error={!!errors.refname2} helperText={errors.refname2 ? errors.refname2.message : ''} />}
      />


      <Controller
        name="refphone2"
        control={control}
        render={({ field }) => <TextField {...field} label="refphone2" margin='dense' error={!!errors.refphone2} helperText={errors.refphone2 ? errors.refphone2.message : ''} />}
      />

      <Controller
        name="refrel3"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refrel3" margin='dense' error={!!errors.refrel3} helperText={errors.refrel3 ? errors.refrel3.message : ''} />}
      />

      <Controller
        name="refname3"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="refname3" margin='dense' error={!!errors.refname3} helperText={errors.refname3 ? errors.refname3.message : ''} />}
      />


      <Controller
        name="refphone3"
        control={control}
        render={({ field }) => <TextField {...field} label="refphone3" margin='dense' error={!!errors.refphone3} helperText={errors.refphone3 ? errors.refphone3.message : ''} />}
      />
    </>
  )
}

export default Reference;
