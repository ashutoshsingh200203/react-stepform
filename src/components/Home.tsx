import { MouseEventHandler, useState } from "react"
import Basic from "./Basic"
import Education from "./Education"
import Work from "./Work"
import Tech from "./Tech"
import FormStepper from "./FormStepper"
// import { useForm } from "react-hook-form"
export default function Home() {
  const [activeSteps , setActiveSteps] = useState(0)
  // const {trigger} = useForm()
  const handleSteps: MouseEventHandler<HTMLButtonElement> = ()=>{
    // trigger()
    console.log('hello')
    setActiveSteps(activeSteps+1)
  }
  return (
    <div className="App">
   <FormStepper activeStep={activeSteps}></FormStepper>
    {(() => {
      switch (activeSteps) {
        case 0:
          return <Basic  activefunc={handleSteps}/>
        case 1:
          return <Education/>
        case 2:
          return <Work/>
        case 3:
          return <Tech/>
        default:
          return null
      }
    })()}

  </div>
  )
}
