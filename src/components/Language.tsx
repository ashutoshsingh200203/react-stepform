import { Controller, Control, UseFormGetValues } from "react-hook-form"
import { Checkbox, FormControlLabel } from "@mui/material"
import { IFormInput } from "../interface";

interface eduProps {
  control: Control<IFormInput>;
  getValues : UseFormGetValues<IFormInput>
}


const Language: React.FC<eduProps> = ({ control , getValues }) => {

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
      <div>

        <Controller
          name="hindi"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="hindi" onClick={() => { handleChange('hindi', 'hindiopt') }} checked={getValues('hindi')} />} label="Hindi" />
          )}
        />
        <span id="hindiopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="hread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read" checked={getValues('hread')} />
            )}
          />
          <Controller
            name="hwrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak"  checked={getValues('hspeak')}/>
            )}
          />
          <Controller
            name="hspeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" checked={getValues('hwrite')} />
            )}
          />
        </span>
      </div>

      <div>

        <Controller
          name="english"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="english" onClick={() => { handleChange('english', 'englishopt') }} checked={getValues('english')} />} label="English" />
          )}
        />
        <span id="englishopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="eread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read"  checked={getValues('eread')}/>
            )}
          />
          <Controller
            name="espeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak" checked={getValues('espeak')} />
            )}
          />
          <Controller
            name="ewrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" checked={getValues('ewrite')} />
            )}
          />
        </span>

      </div>

      <div>

        <Controller
          name="gujarati"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} id="gujarati" onClick={() => { handleChange('gujarati', 'gujaratiopt') }} checked={getValues('gujarati')} />} label="Gujarati" />
          )}
        />
        <span id="gujaratiopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="gread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read" checked={getValues('gread')} />
            )}
          />
          <Controller
            name="gspeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak" checked={getValues('gspeak')} />
            )}
          />
          <Controller
            name="gwrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" checked={getValues('gwrite')} />
            )}
          />
        </span>
      </div>
    </>
  )
}

export default Language;

