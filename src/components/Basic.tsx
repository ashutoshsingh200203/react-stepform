import { Controller, Control } from "react-hook-form"
import {
  TextField, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio,
  InputLabel, MenuItem, Select
} from "@mui/material"
import { IFormInput } from "./Home";



interface basicProps {
  control: Control<IFormInput>;
  errors: any
}





const Basic: React.FC<basicProps> = ({ control, errors }) => {

  return (
    <>

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="First name" margin='dense' error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} />}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Last name" margin='dense' error={!!errors.lastName} helperText={errors.lastName ? errors.lastName.message : ''} />}
      />
      <Controller
        name="designation"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Designation" margin='dense' error={!!errors.designation} helperText={errors.designation ? errors.designation.message : ''} />}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" margin='dense' error={!!errors.email} helperText={errors.email ? errors.email.message : ''} />}
      />
      <Controller
        name="address1"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="address1" margin='dense' multiline error={!!errors.address1} helperText={errors.address1 ? errors.address1.message : ''} />}
      />

      <Controller
        name="address2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Address2" margin='dense' multiline error={!!errors.address2} helperText={errors.address2 ? errors.address2.message : ''} />}
      />
      <Controller
        name="state"
        control={control}
        defaultValue=''
        render={({ field }) => <TextField {...field} label="State" margin='dense' error={!!errors.state} helperText={errors.state ? errors.state.message : ''} />}
      />
      <Controller
        name="city"
        control={control}
        defaultValue=''
        render={({ field }) => <TextField {...field} label="City" margin='dense' error={!!errors.city} helperText={errors.city ? errors.city.message : ''} />}
      />
      <Controller
        name="zipcode"
        control={control}
        render={({ field }) => <TextField {...field} label="Zipcode" margin='dense' error={!!errors.zipcode} helperText={errors.zipcode ? errors.zipcode.message : ''} />}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => <TextField {...field} label="Phone" margin='dense' error={!!errors.phone} helperText={errors.phone ? errors.phone.message : ''} />}
      />

      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <Controller
          name='gender'
          control={control}
          defaultValue='male'
          render={({ field }) => (<RadioGroup  {...field} row  >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>)} >
        </Controller>
      </FormControl>

      <FormControl size={"small"}>
        <InputLabel id="demo-simple-select-label">Relationship</InputLabel>
        <Controller
          name='relation'
          control={control}
          render={({ field }) => (<Select {...field}  >
            <MenuItem value={10}>Single</MenuItem>
            <MenuItem value={20}>Married</MenuItem>
          </Select>)}>
        </Controller>
      </FormControl>
    </>

  )
}

export default Basic;