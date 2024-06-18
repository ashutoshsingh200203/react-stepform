import { useEffect, useState } from "react"
import Basic from "./Basic"
import Education from "./Education"
import Work from "./Work"
import Tech from "./Tech"
import Language from "./Language"
import Reference from "./Reference"
import Preference from "./Preference"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import { schema1, schema2, schema5, schema3, schema4, schema6, schema7 } from "../schema"
import { IFormInput } from "../interface"
import { addUser, getUser, initDB, updateUser } from "../database"
import { useNavigate, useSearchParams } from "react-router-dom"
import Swal from 'sweetalert2'


const steps : string[] = ['Basic Details', 'Educational Details', 'Experience', 'Language', 'Technologies', 'References', 'Preferences'];

const Home: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState(0)

  const [searchParams] = useSearchParams()
  const id : string | null= searchParams.get('id')
  const navigate = useNavigate()

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

  const { control, formState: { errors }, trigger, reset, handleSubmit,getValues } = useForm<IFormInput>({ resolver: yupResolver<IFormInput>(currentSchema()), mode: 'onChange' })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon:'question',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit"
    })

    if (result.isConfirmed) {
     
      if(id === null)
      {
        await initDB();
        await addUser(data)
        console.log(data)
        navigate('/list')

        await Swal.fire({
          title: "Submitted",
          text: "Your form has submitted successfully!",
          icon: "success"
        });
      }
      else{
        console.log("Edit Mode")
        await initDB();
        await updateUser(data)
        navigate('/list')

        await Swal.fire({
          title: "Submitted!",
          text: "Your form has been updated successfully.",
          icon: "success"
        });
      }
    }
    else if (result.dismiss)
    {
      setActiveSteps((e) => e - 1);
    }
   
  }

  useEffect(() => {
    if (id) {
      handleEdit();
    }
  }, [])

  const handleEdit = async () => {
    await initDB()
    console.log(id)
    const editdata = await getUser(Number(id))
    reset(editdata);
  }

  const handleBack = async () => {
    setActiveSteps((e) => e - 1);
  }

  const handleNext = async () => {
    if (activeSteps === 7) {
      navigate('/list')
    }
    const valid = await trigger();
    if (valid) {
      setActiveSteps((e) => e + 1)
      console.log(activeSteps)
    }
  }

  const mainContent = (step: number) => {
    switch (step) {
      case 0:
        return <Basic control={control} errors={errors} />
      case 1:
        return <Education control={control} errors={errors} />;
      case 2:
        return <Work control={control} errors={errors} />;
      case 3:
        return <Language control={control} getValues={getValues} />;
      case 4:
        return <Tech control={control} getValues={getValues}/>;
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
      <Stepper activeStep={activeSteps} alternativeLabel sx={{marginTop: '20px'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px', marginLeft: '60px', marginTop:'50px' }} >
        <>{mainContent(activeSteps)}</>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>

          < Button disabled={activeSteps === 0} onClick={handleBack} variant="contained" >Back</Button>
          < Button type={activeSteps === steps.length ? 'submit' : 'button'} onClick={handleNext} variant="contained" >{activeSteps === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </Box>
      </form>
    </Box>
  )
}

export default Home;