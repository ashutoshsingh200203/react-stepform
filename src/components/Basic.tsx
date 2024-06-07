import React, { MouseEventHandler } from 'react'
import { useForm, Controller, SubmitHandler, Resolver } from "react-hook-form"
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio, Box 
  , InputLabel , MenuItem , Select} from "@mui/material"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

interface IFormInput {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  address1: string;
  address2: string;
  relation: string;
  state: string;
  gender: string ;
  city: string;
  phone : number ;
  zipcode : number ;
}

type actstep ={
  activefunc : MouseEventHandler<HTMLButtonElement>

}

const schema = yup.object().shape({
  firstName: yup.string().required('FirstName is required'),
  lastName: yup.string().required('LastName is required'),
  designation: yup.string().required('Designation is required'),
  email: yup.string().email('Email must be valid email'),
  address1: yup.string().min(10).max(100).required('Address1 is required'),
  address2: yup.string().max(100),
  relation: yup.string().required('Relation is required'),
  state: yup.string().required('State is required'),
  gender: yup.string().required(),
  city: yup.string().required('City is required'),
  phone: yup.number().min(10).required('Phone is required'),
  zipcode: yup.number().min(6).required('Zipcode is required')
})



const Basic: React.FC<actstep>= ({activefunc}) => {

  const { control, handleSubmit ,formState: { errors } } = useForm<IFormInput>({ resolver: yupResolver(schema) as Resolver<IFormInput, any> })

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data)
  }

  return (
    <Box sx={{ width : '70%' , padding : '10px' , margin: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{padding : '20px'}} >
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="First name"  margin='dense'error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} />}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Last name"  margin='dense'error={!!errors.lastName} helperText={errors.lastName ? errors.lastName.message : ''} />}
        />
        <Controller
          name="designation"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Designation"  margin='dense'error={!!errors.designation} helperText={errors.designation ? errors.designation.message : ''} />}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Email"  margin='dense'error={!!errors.email} helperText={errors.email ? errors.email.message : ''} />}
        />
       <Controller
          name="address1"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="address1"  margin='dense'multiline error={!!errors.address1} helperText={errors.address1 ? errors.address1.message : ''} />}
        />

        <Controller
          name="address2"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Address2"  margin='dense'multiline error={!!errors.address2} helperText={errors.address2 ? errors.address2.message : ''} />}
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
          render={({ field }) => <TextField {...field} label="City"  margin='dense'error={!!errors.city} helperText={errors.city ? errors.city.message : ''} />}
        />
          <Controller
          name="zipcode"
          control={control}
          render={({ field }) => <TextField {...field} label="Zipcode"  margin='dense'error={!!errors.zipcode} helperText={errors.zipcode ? errors.zipcode.message : ''} />}
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
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Controller
        name='relation'
        control={control}
        render={({field})=> (<Select {...field} value='10'>
           <MenuItem value={10}>Single</MenuItem>
          <MenuItem value={20}>Married</MenuItem>
        </Select> )}>
        </Controller>
        </FormControl>
        
        <Button variant="contained" type='button' sx={{display : 'block'}} onClick={activefunc} >Next  </Button>
      </form>
    </Box>
  )
}

export default Basic;