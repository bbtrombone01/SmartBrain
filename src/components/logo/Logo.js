import React from "react";
import Tilt from "react-parallax-tilt"
import brian from "./brian.png"


const Logo =()=>{
    return (<div className="ma4 mt0 w4">
         <Tilt className="Tilt br2 shadow-2">
      <div style={{ height: '100px', width: "100px"}}>
        <img src ={brian} alt="brian" />
      </div>
    </Tilt>
      
    </div>)
}


export default Logo