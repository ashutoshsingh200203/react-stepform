import { Controller, Control } from "react-hook-form"
import { TextField } from "@mui/material"
import { IFormInput } from "./Home";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'

interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Work: React.FC<eduProps> = ({ control, errors }) => {
  return (
    <>
      <Controller
        name="comp1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="comp1" margin='dense' error={!!errors.comp1} helperText={errors.comp1 ? errors.comp1.message : ''} />}
      />

      <Controller
        name="desig1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="desig1" margin='dense' error={!!errors.desig1} helperText={errors.desig1 ? errors.desig1.message : ''} />}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='todate1'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="todate1" />
          )}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='fromdate2'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="fromdate2" />
          )}
        />
      </LocalizationProvider>
      <Controller
        name="comp2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="comp2" margin='dense' error={!!errors.comp2} helperText={errors.comp2 ? errors.comp2.message : ''} />}
      />

      <Controller
        name="desig2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="desig2" margin='dense' error={!!errors.desig2} helperText={errors.desig2 ? errors.desig2.message : ''} />}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='todate2'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="todate2" />
          )}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='fromdate2'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="fromdate2" />
          )}
        />
      </LocalizationProvider>

      <Controller
        name="comp3"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="comp3" margin='dense' error={!!errors.comp3} helperText={errors.comp3 ? errors.comp3.message : ''} />}
      />

      <Controller
        name="desig3"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="desig3" margin='dense' error={!!errors.desig3} helperText={errors.desig3 ? errors.desig3.message : ''} />}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='todate3'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="todate3" />
          )}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name='fromdate3'
          control={control}
          defaultValue={dayjs('2018-08-08')}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="fromdate3" />
          )}
        />
      </LocalizationProvider>
     

      
    </>
  )
}

export default Work;