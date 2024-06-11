import { useState } from "react"
import Basic from "./Basic"
import Education from "./Education"
import Work from "./Work"
import Tech from "./Tech"
import Language from "./Language"
import Reference from "./Reference"
import Preference from "./Preference"
import { Button, Box } from "@mui/material"
import { useForm, SubmitHandler , Resolver } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



export interface IFormInput {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  address1: string;
  address2: string;
  relation: string;
  state: string;
  gender: string;
  city: string;
  phone: string;
  zipcode: number;
  sscBoard: string;
  sscYear: number;
  sscPer: number;
  hscBoard: string;
  hscYear: number;
  hscPer: number;
  bacBoard: string;
  bacYear: string;
  bacUni: string;
  bacPer: number;
  masBoard: string;
  masYear: string;
  masUni: string;
  masPer: number;
  comp1 : string ;
  desig1 : string ;
  todate1 : unknown ;
  fromdate1 : unknown ;
  comp2 : string ;
  desig2 : string ;
  todate2 : unknown ;
  fromdate2 : unknown ;
  comp3 : string ;
  desig3 : string ;
  todate3 : unknown ;
  fromdate3 : unknown ;
  ectc : number ;
  cctc : number ;
  notice : number ;
  location : string ;
  department : string ;
  refrel1 : string ;
  refname1 : string ;
  refphone1 : number ;
  refrel2 : string ;
  refname2 : string ;
  refphone2 : number ;
  refrel3 : string ;
  refname3 : string ;
  refphone3 : number ;
  hindi : boolean ;
  hread : boolean ;
  hwrite : boolean ;
  hspeak : boolean
  gujarati : boolean ;
  gread : boolean ;
  gwrite : boolean ;
  gspeak : boolean ;
  english : boolean ;
  eread : boolean ;
  espeak : boolean ;
  ewrite : boolean ;
  php : boolean ;
  php_lev : string ;
  oracle : boolean ;
  oracle_lev : string ;
  mysql : boolean ;
  mysql_lev : string ;
  laravel : boolean ;
  laravel_lev : string ;
}

const schema1 = yup.object().shape({
  // firstName: yup.string().required('FirstName is required'),
  // lastName: yup.string().required('LastName is required'),
  // designation: yup.string().required('Designation is required'),
  // email: yup.string().email('Email must be valid email'),
  // address1: yup.string().min(10).max(100).required('Address1 is required'),
  // address2: yup.string().max(100),
  // relation: yup.string().required('Relation is required'),
  // state: yup.string().required('State is required'),
  // gender: yup.string().required(),
  // city: yup.string().required('City is required'),
  // phone: yup.string().min(10).required('Phone is required'),
  // zipcode: yup.number().min(6).required('Zipcode is required'),
})

const schema2 = yup.object().shape({
  sscBoard: yup.string().required('Board is Required'),
  sscYear: yup.number().min(1960).max(2025).required('Year is required'),
  sscPer: yup.number().required('percentage is required'),
  hscBoard: yup.string().required('Board is Required'),
  hscYear: yup.number().min(1960).max(2025).required('Year is required'),
  hscPer: yup.number().required('percentage is required'),
  bacBoard: yup.string().required('Board is Required'),
  bacYear: yup.number().min(1960).max(2025).required('Year is required'),
  bacUni: yup.string().required('University is Required'),
  bacPer: yup.number().required('percentage is required'),
  masBoard: yup.string(),
  masYear: yup.number().min(1960).max(2025),
  masUni: yup.string(),
  masPer: yup.number()
})

const schema3 = yup.object().shape({

})
const schema4 = yup.object().shape({
  hindi : yup.boolean(),
  hread : yup.boolean(),
  hwrite : yup.boolean(),
  hspeak : yup.boolean(),
  english : yup.boolean(),
  eread : yup.boolean(),
  ewrite : yup.boolean(),
  espeak : yup.boolean(),
  gujarati : yup.boolean(),
  gread : yup.boolean(),
  gwrite : yup.boolean(),
  gspeak : yup.boolean(),
})
const schema5 = yup.object().shape({
  php : yup.boolean(),
  php_lev : yup.string(),
  oracle : yup.boolean(),
  oracle_lev : yup.string(),
  mysql : yup.boolean(),
  mysql_lev : yup.string(),
  laravel : yup.boolean(),
  laravel_lev : yup.string()
})
const schema6 = yup.object().shape({
  refrel1 : yup.string(),
  refname1 : yup.string().when('refrel1',{
    is : (refrel1 : string , refphone1 : number)=> refphone1 || refrel1.length > 0 ,
    then : (schema)=> schema.required('Fill all reference details'),
  }),
  refphone1 : yup.number().when('refrel1',{
    is : (refrel1 : string) => refrel1.length > 0,
    then : (schema) =>  schema.required('Fill all reference details')
  }),

  refrel2 : yup.string(),
  refname2 : yup.string().when('refrel2',{
    is : (refrel2 : string , refphone2 : number)=> refphone2 && refrel2.length > 0 ,
    then : (schema)=> schema.required('Fill all reference details'),
  }),
  refphone2 : yup.number().when('refrel2',{
    is : (refrel2 : string) => refrel2.length > 0,
    then : (schema) =>  schema.required('Fill all reference details')
  }),

  refrel3 : yup.string(),
  refname3 : yup.string().when('refrel3',{
    is : (refrel3 : string , refphone3 : number)=> refphone3 && refrel3.length > 0 ,
    then : (schema)=> schema.required('Fill all reference details'),
  }),
  refphone3 : yup.number().when('refrel3',{
    is : (refrel3 : string) => refrel3.length > 0,
    then : (schema) =>  schema.required('Fill all reference details')
  })
})
const schema7 = yup.object().shape({
  // ectc : yup.number().positive().required('Expected CTC is required'),
  // cctc : yup.number().positive(),
  // notice : yup.number().positive().required('If no fill 0'),
  // location : yup.string().required(),
  // department : yup.string().required()
})

const steps = [
  'Basic Details',
  'Educational Details',
  'Experience',
  'Language',
  'Technologies',
  'References',
  'Preferences'
];



const Home: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState(0)

  const currentSchema = () => {
    switch (activeSteps) {
      case 0:
        return schema1;
      case 1:
        return schema2;
      case 2:
        return schema3;
      case 3:
        return schema4;
      case 4:
        return schema5;
      case 5:
        return schema6;
      case 6:
        return schema7;
      default:
        return schema1;

    }
  };

  const { control, formState: { errors }, trigger, handleSubmit } = useForm<IFormInput>({ resolver: yupResolver(currentSchema()) as Resolver<IFormInput, any>, mode: 'onChange' })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (activeSteps < steps.length - 1) {
      setActiveSteps(activeSteps + 1)
    }
    else {
      console.log(data)
      
    }
  }

  const handleBack = async () => {
    setActiveSteps((e) => e - 1);
  }

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) {
      setActiveSteps((e) => e + 1)
    }
  }

  const mainContent  = (step: number) => {
    switch (step) {
      case 0:
        return <Basic control={control} errors={errors} />
      case 1:
        return <Education control={control} errors={errors} />;
      case 2:
        return <Work control={control} errors={errors} />;
      case 3:
        return <Language control={control}/>;
      case 4:
        return <Tech control={control} />;
      case 5:
        return <Reference control={control} errors={errors} />;
      case 6:
        return <Preference control={control} errors={errors} />;
      default:
        return Basic;
    }
  }

  return (

    <Box sx={{ width: '70%', padding: '10px', margin: 'auto' }}>
      <Stepper activeStep={activeSteps} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px' , marginLeft: '60px' }} >
        <>{mainContent(activeSteps)}</>
        <Box sx={{display : 'flex' , justifyContent : 'space-around' , marginTop : 4}}>

        < Button disabled={activeSteps === 0} onClick={handleBack} variant="contained" >Back</Button>
        < Button type={activeSteps === steps.length  ? 'submit' : 'button'} onClick={handleNext} variant="contained" >{activeSteps ===steps.length -1 ? 'Finish' : 'Next'}</Button>
        </Box>
      </form>
    </Box>
  )
}

export default Home ;