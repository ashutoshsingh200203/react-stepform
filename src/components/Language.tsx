import { Controller, Control } from "react-hook-form"
import { Checkbox, FormControlLabel } from "@mui/material"
import { IFormInput } from "../interface";

interface eduProps {
  control: Control<IFormInput>;
}


const Language: React.FC<eduProps> = ({ control }) => {

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
            <FormControlLabel control={<Checkbox {...field} id="hindi" onClick={() => { handleChange('hindi', 'hindiopt') }} />} label="Hindi" />
          )}
        />
        <span id="hindiopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="hread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read" />
            )}
          />
          <Controller
            name="hwrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" />
            )}
          />
          <Controller
            name="hspeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak" />
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
            <FormControlLabel control={<Checkbox {...field} id="english" onClick={() => { handleChange('english', 'englishopt') }} />} label="English" />
          )}
        />
        <span id="englishopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="eread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read" />
            )}
          />
          <Controller
            name="espeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" />
            )}
          />
          <Controller
            name="ewrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak" />
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
            <FormControlLabel control={<Checkbox {...field} id="gujarati" onClick={() => { handleChange('gujarati', 'gujaratiopt') }} />} label="Gujarati" />
          )}
        />
        <span id="gujaratiopt" style={{ visibility: 'hidden' }}>

          <Controller
            name="gread"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Read" />
            )}
          />
          <Controller
            name="gspeak"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Write" />
            )}
          />
          <Controller
            name="gwrite"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label="Speak" />
            )}
          />
        </span>
      </div>
    </>
  )
}

export default Language;

