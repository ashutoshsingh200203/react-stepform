import { Controller, Control } from "react-hook-form"
import { TextField } from "@mui/material"
import { IFormInput } from "../interface";

interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Education: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <div className="section">
        <Controller
          name="sscBoard"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="SSC Board" margin='dense' error={!!errors.sscBoard} helperText={errors.sscBoard ? errors.sscBoard.message : ''} />}
        />
        <Controller
          name="sscYear"
          control={control}
          render={({ field }) => <TextField {...field} label="SSC Year of Passing" margin='dense' error={!!errors.sscYear} helperText={errors.sscYear ? errors.sscYear.message : ''} />}
        />
        <Controller
          name="sscPer"
          control={control}
          render={({ field }) => <TextField {...field} label="SSC Percentage" margin='dense' error={!!errors.sscPer} helperText={errors.sscPer ? errors.sscPer.message : ''} />}
        />
      </div>

      <div className="section">

        <Controller
          name="hscBoard"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="HSC Board" margin='dense' error={!!errors.hscBoard} helperText={errors.hscBoard ? errors.hscBoard.message : ''} />}
        />

        <Controller
          name="hscYear"
          control={control}
          render={({ field }) => <TextField {...field} label="HSC Year of Passing" margin='dense' error={!!errors.hscYear} helperText={errors.hscYear ? errors.hscYear.message : ''} />}
        />
        <Controller
          name="hscPer"
          control={control}
          render={({ field }) => <TextField {...field} label="HSC Percentage" margin='dense' error={!!errors.hscPer} helperText={errors.hscPer ? errors.hscPer.message : ''} />}
        />
      </div>

      <div className="section">

        <Controller
          name="bacBoard"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Bachelor's Board" margin='dense' error={!!errors.bacBoard} helperText={errors.bacBoard ? errors.bacBoard.message : ''} />}
        />

        <Controller
          name="bacUni"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Bachelor's University" margin='dense' error={!!errors.bacUni} helperText={errors.bacUni ? errors.bacUni.message : ''} />}
        />


        <Controller
          name="bacYear"
          control={control}
          render={({ field }) => <TextField {...field} label="Bachelor's Year of Passing" margin='dense' error={!!errors.bacYear} helperText={errors.bacYear ? errors.bacYear.message : ''} />}
        />
        <Controller
          name="bacPer"
          control={control}
          render={({ field }) => <TextField {...field} label="Bachelor's Percentage" margin='dense' error={!!errors.bacPer} helperText={errors.bacPer ? errors.bacPer.message : ''} />}
        />
      </div>

      <div className="section">

        <Controller
          name="masUni"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Masters University" margin='dense' error={!!errors.masUni} helperText={errors.masUni ? errors.masUni.message : ''} />}
        />


        <Controller
          name="masBoard"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Masters Board" margin='dense' error={!!errors.masBoard} helperText={errors.masBoard ? errors.masBoard.message : ''} />}
        />


        <Controller
          name="masYear"
          control={control}
          render={({ field }) => <TextField {...field} label="Masters Year of Passing" margin='dense' error={!!errors.masYear} helperText={errors.masYear ? errors.masYear.message : ''} />}
        />
        <Controller
          name="masPer"
          control={control}
          render={({ field }) => <TextField {...field} label="Masters Percentage" margin='dense' error={!!errors.masPer} helperText={errors.masPer ? errors.masPer.message : ''} />}
        />
      </div>
    </>
  )
}

export default Education;