import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Basic Details',
  'Educational Details',
  'Experience',
  'Language',
  'Technologies',
  'References',
  'Preferences'
];

type Steps = {
  activeStep : number ;
}

const FormStepper : React.FC<Steps> = ({activeStep})=> {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}


export default FormStepper ;