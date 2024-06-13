import { Controller, Control, useFieldArray } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { IFormInput } from "../interface";

interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Work: React.FC<eduProps> = ({ control, errors }) => {

  const { fields, append, remove } = useFieldArray({ name: 'experience', control });
  console.log(fields.length)

  return (
    <>
      <div className="changebut">
        <Button variant="contained" color="error" onClick={() => remove(fields.length - 1)}> Delete </Button>
        <Button variant="contained" color="success" onClick={() => append({ name: "", desig: "", fromdate: '', todate: '' })}> Add </Button>
      </div>


      {fields.map((item, i) => (

        <div key={item.id} className="section">
          <Controller
            name={`experience.${i}.name`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Company" margin='dense' error={!!errors.experience?.[i]?.name} helperText={errors.experience?.[i]?.name && `${errors.experience?.[i]?.name.message}`} />}
          />

          <Controller
            name={`experience.${i}.desig`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Designation" margin='dense' error={!!errors.experience?.[i]?.desig} helperText={errors.experience?.[i]?.desig && `${errors.experience?.[i]?.desig.message}`} />}
          />


          <Controller
            name={`experience.${i}.fromdate`}
            control={control}
            render={({ field }) => <TextField {...field} label="To Date" margin='dense' type="date" InputLabelProps={{shrink : true}} />}
          />

          <Controller
            name={`experience.${i}.todate`}
            control={control}
            render={({ field }) => <TextField {...field} label="From Date" margin='dense' type="date" InputLabelProps={{shrink : true}} />}
          />

        </div>
      ))}
    </>
  )
}

export default Work;