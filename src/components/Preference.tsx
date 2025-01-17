import { Controller, Control } from "react-hook-form"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { IFormInput } from "../interface";


interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Preference: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <div className="section">

        <Controller
          name="ectc"
          control={control}
          render={({ field }) => <TextField {...field} label="Expected CTC" margin='dense' error={!!errors.ectc} helperText={errors.ectc ? errors.ectc.message : ''} />}
        />

        <Controller
          name="cctc"
          control={control}
          render={({ field }) => <TextField {...field} label="Current CTC" margin='dense' error={!!errors.cctc} helperText={errors.cctc ? errors.cctc.message : ''} />}
        />

        <Controller
          name="notice"
          control={control}
          render={({ field }) => <TextField {...field} label="Notice Period" margin='dense' error={!!errors.notice} helperText={errors.notice ? errors.notice.message : ''} />}
        />
      </div>

      <div className="section">

        <FormControl sx={{ minWidth: '200px' }} >
          <InputLabel id="demo-simple-select-label">Preferred Location</InputLabel>
          <Controller
            name='location'
            control={control}
            defaultValue=""
            render={({ field }) => (<Select {...field} error={!!errors.location} >
              <MenuItem value={10}>Ahmedabad</MenuItem>
              <MenuItem value={20}>Rajkot</MenuItem>
              <MenuItem value={30}>Surat</MenuItem>
              <MenuItem value={40}>Vadodara</MenuItem>
            </Select>)}>
          </Controller>
        </FormControl>


        <FormControl sx={{ minWidth: '200px' }} >
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Controller
            name='department'
            control={control}
            defaultValue=""
            render={({ field }) => (<Select {...field} error={!!errors.department}  >
              <MenuItem value={10}>Development</MenuItem>
              <MenuItem value={20}>Designing</MenuItem>
              <MenuItem value={30}>Testing</MenuItem>
              <MenuItem value={40}>HR</MenuItem>
            </Select>)}>
          </Controller>
        </FormControl>
      </div>
    </>
  )
}

export default Preference;