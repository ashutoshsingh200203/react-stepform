import { Controller, Control } from "react-hook-form"
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material"
import { IFormInput } from "./Home";


interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Preference: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <Controller
        name="ectc"
        control={control}
        render={({ field }) => <TextField {...field} label="ectc" margin='dense' error={!!errors.ectc} helperText={errors.ectc ? errors.ectc.message : ''} />}
      />

      <Controller
        name="cctc"
        control={control}
        render={({ field }) => <TextField {...field} label="cctc" margin='dense' error={!!errors.cctc} helperText={errors.cctc ? errors.cctc.message : ''} />}
      />

      <Controller
        name="notice"
        control={control}
        render={({ field }) => <TextField {...field} label="notice" margin='dense' error={!!errors.notice} helperText={errors.notice ? errors.notice.message : ''} />}
      />


<FormControl size={"small"}>
        <InputLabel id="demo-simple-select-label">Relationship</InputLabel>
        <Controller
          name='location'
          control={control}
          render={({ field }) => (<Select {...field}  >
            <MenuItem value={10}>Ahmedabad</MenuItem>
            <MenuItem value={20}>Rajkot</MenuItem>
            <MenuItem value={30}>Surat</MenuItem>
            <MenuItem value={40}>Vadodara</MenuItem>
          </Select>)}>
        </Controller>
      </FormControl>


      <FormControl size={"small"}>
        <InputLabel id="demo-simple-select-label">Relationship</InputLabel>
        <Controller
          name='department'
          control={control}
          render={({ field }) => (<Select {...field}  >
            <MenuItem value={10}>Development</MenuItem>
            <MenuItem value={20}>Designing</MenuItem>
            <MenuItem value={30}>Testing</MenuItem>
            <MenuItem value={40}>HR</MenuItem>
          </Select>)}>
        </Controller>
      </FormControl>
    </>
  )
}

export default Preference ;