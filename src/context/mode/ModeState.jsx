import { useState } from 'react'
import ModeContext from './ModeContext'

const ModeState=(props)=>{
    const [mode,setMode] = useState(false)

 return(
    <ModeContext.Provider value={{mode,setMode}}>
        {props.children}
    </ModeContext.Provider>
 )   
}

export default ModeState