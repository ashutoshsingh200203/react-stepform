import { Controller, Control, useFieldArray } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { IFormInput } from "../interface";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Work: React.FC<eduProps> = ({ control , errors }) => {

  const { fields, append, remove } = useFieldArray({ name : 'experience', control });
  console.log(fields.length)

  return (
    <>
    <div className="changebut">
    <Button variant="contained" color="error"  onClick={()=> remove(fields.length-1)}> Delete </Button>
    <Button variant="contained" color="success"  onClick={()=> append({name : "" , desig : "" , fromdate : dayjs('2018-08-08') , todate : dayjs('2018-08-08') })}> Add </Button>
    </div>

    
      {fields.map((item, i) => (
      
        <div key={item.id} className="section">
          <Controller
            name={`experience.${i}.name`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Company" margin='dense'  error={!!errors.experience?.[i]?.name} helperText={errors.experience?.[i]?.name && `${errors.experience?.[i]?.name.message}`} />}
          />

          <Controller
            name={`experience.${i}.desig`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Designation" margin='dense' error={!!errors.experience?.[i]?.desig} helperText={errors.experience?.[i]?.desig && `${errors.experience?.[i]?.desig.message}`} />}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name={`experience.${i}.fromdate`}
              control={control} 
            
              render={({ field: { onChange, value } }) => (
                <DatePicker value={value} onChange={onChange} label="From Date"  />
              )}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={`experience.${i}.todate`}
          control={control}
        
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} label="To Date" />
          )}
        />
      </LocalizationProvider>

        </div>
      ))}




      {/* <Controller
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
        error={!!errors.experience?.[i]?.desig} helperText={errors.desig1 ? errors.experience?.[i]?.desig.message : ''}
      </LocalizationProvider> */}



    </>
  )
}

export default Work;