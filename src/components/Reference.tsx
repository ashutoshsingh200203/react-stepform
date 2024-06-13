import { Controller, Control, useFieldArray } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { IFormInput } from "../interface";


interface eduProps {
  control: Control<IFormInput>;
  errors: any
}


const Reference: React.FC<eduProps> = ({ control, errors }) => {

  const { fields, append, remove } = useFieldArray({ name: 'reference', control });

  return (
    <>
      <div className="changebut">
        <Button variant="contained" color="error" onClick={() => remove(fields.length - 1)}> Delete </Button>
        <Button variant="contained" color="success" onClick={() => append({ relation: "", name : '', phone: ""  })}> Add </Button>
      </div>
      {fields.map((item, i) => (

        <div key={item.id} className="section">
          <Controller
            name={`reference.${i}.relation`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Relation" margin='dense' error={!!errors.reference?.[i]?.relation} helperText={errors.reference?.[i]?.relation && `${errors.reference?.[i]?.relation.message}`} />}
          />

          <Controller
            name={`reference.${i}.name`}
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Name" margin='dense' error={!!errors.reference?.[i]?.name} helperText={errors.reference?.[i]?.name && `${errors.reference?.[i]?.name.message}`} />}
          />

          <Controller
            name={`reference.${i}.phone`}
            control={control}
            render={({ field }) => <TextField {...field} label="Phone" margin='dense' error={!!errors.reference?.[i]?.phone} helperText={errors.reference?.[i]?.phone && `${errors.reference?.[i]?.phone.message}`} />}
          />


        </div>
      ))}
    </>
  )
}

export default Reference;



// <Controller
// name="refrel2"
// control={control}
// defaultValue=""
// render={({ field }) => <TextField {...field} label="refrel2" margin='dense' error={!!errors.refrel2} helperText={errors.refrel2 ? errors.refrel2.message : ''} />}
// />

// <Controller
// name="refname2"
// control={control}
// defaultValue=""
// render={({ field }) => <TextField {...field} label="refname2" margin='dense' error={!!errors.refname2} helperText={errors.refname2 ? errors.refname2.message : ''} />}
// />


// <Controller
// name="refphone2"
// control={control}
// render={({ field }) => <TextField {...field} label="refphone2" margin='dense' error={!!errors.refphone2} helperText={errors.refphone2 ? errors.refphone2.message : ''} />}
// />

// <Controller
// name="refrel3"
// control={control}
// defaultValue=""
// render={({ field }) => <TextField {...field} label="refrel3" margin='dense' error={!!errors.refrel3} helperText={errors.refrel3 ? errors.refrel3.message : ''} />}
// />

// <Controller
// name="refname3"
// control={control}
// defaultValue=""
// render={({ field }) => <TextField {...field} label="refname3" margin='dense' error={!!errors.refname3} helperText={errors.refname3 ? errors.refname3.message : ''} />}
// />


// <Controller
// name="refphone3"
// control={control}
// render={({ field }) => <TextField {...field} label="refphone3" margin='dense' error={!!errors.refphone3} helperText={errors.refphone3 ? errors.refphone3.message : ''} />}
// />