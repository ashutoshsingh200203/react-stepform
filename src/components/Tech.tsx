import { Controller, Control } from "react-hook-form"
import { Checkbox, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import { IFormInput } from "./Home";

interface eduProps {
  control: Control<IFormInput>;
}


const Tech: React.FC<eduProps> = ({ control }) => {

  const handleChange = (language: string, span: string) => {
    let lang: HTMLInputElement | null = document.getElementById(language) as HTMLInputElement
    let spanElement = document.getElementById(span)
    if (lang != null && spanElement != null) {
      console.log(lang.checked)
      if (lang.checked) {
        spanElement.style.visibility = "visible";
      }
      else {
        spanElement.style.visibility = "hidden";
      }
    }

  }

  return (
    <>
      <div className="tech">

        <Controller
          name="php"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="php" onClick={() => { handleChange('php', 'phplev') }} />} label="PHP" />
          )}
        />
        <Controller
          name='php_lev'
          control={control}
          defaultValue=''
          render={({ field }) => (<RadioGroup  {...field} row id="phplev" sx={{ visibility: 'hidden' }} >
            <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
            <FormControlLabel value="mediator" control={<Radio />} label="Mediator" />
            <FormControlLabel value="expert" control={<Radio />} label="Expert" />
          </RadioGroup>)} >
        </Controller>

      </div>

      <div className="tech">

        <Controller
          name="oracle"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="oracle" onClick={() => { handleChange('oracle', 'oraclelev') }} />} label="Oracle" />
          )}
        />
        <Controller
          name='oracle_lev'
          control={control}
          defaultValue=''
          render={({ field }) => (<RadioGroup  {...field} row id="oraclelev" sx={{ visibility: 'hidden' }}  >
            <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
            <FormControlLabel value="mediator" control={<Radio />} label="Mediator" />
            <FormControlLabel value="expert" control={<Radio />} label="Expert" />
          </RadioGroup>)} >
        </Controller>
      </div>

      <div className="tech">

        <Controller
          name="mysql"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="mysql" onClick={() => { handleChange('mysql', 'mysqllev') }} />} label="Mysql" />
          )}
        />
        <Controller
          name='mysql_lev'
          control={control}
          defaultValue=''
          render={({ field }) => (<RadioGroup  {...field} row id="mysqllev" sx={{ visibility: 'hidden' }}  >
            <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
            <FormControlLabel value="mediator" control={<Radio />} label="Mediator" />
            <FormControlLabel value="expert" control={<Radio />} label="Expert" />
          </RadioGroup>)} >
        </Controller>
      </div>

      <div className="tech">

        <Controller
          name="laravel"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="laravel" onClick={() => { handleChange('laravel', 'laravellev') }} />} label="Laravel" />
          )}
        />
        <Controller
          name='laravel_lev'
          control={control}
          defaultValue=''
          render={({ field }) => (<RadioGroup  {...field} row id="laravellev" sx={{ visibility: 'hidden' }} >
            <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
            <FormControlLabel value="mediator" control={<Radio />} label="Mediator" />
            <FormControlLabel value="expert" control={<Radio />} label="Expert" />
          </RadioGroup>)} >
        </Controller>
      </div>
    </>
  )
}

export default Tech;