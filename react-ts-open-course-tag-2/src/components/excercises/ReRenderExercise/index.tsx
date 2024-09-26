import React, {useState} from 'react'
import RenderItem3 from './RenderItem3'

function ReRenderExercise({children}:{children: React.ReactNode}) {
  console.log("ReRenderExercise rendered")

  const [render, setRender] = useState(false);

  return (
    <div><h2>Re-RenderExercise</h2>
    {children}
    <RenderItem3/>
    <button onClick={()=>setRender(!render)}>render</button>
    </div>
  )
}

export default ReRenderExercise