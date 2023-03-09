import React from "react";
import Details from "./Details";
import JSON from './data.json'
const App=()=>{
    return(
        <>
        <Details data={JSON}/>
        </>
    )
}
export default App