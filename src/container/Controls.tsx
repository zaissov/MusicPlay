import React, {useState} from "react";
import cover from '../assets/images/cover/cradles.jpg';
import {next,pause,play,prev,stop} from '../assets/images/buttons';
import ControlButton from "./components/ControlButton";




const Controls =()=>{
    const [ispaused,setIsPaused]=useState(true)
    const handlePlay=()=>{
        setIsPaused (!ispaused);
    };
    return(
        <div className='control-container'>
            <img src={cover} alt="Capa do album" className="current"/>
            <div className="buttons-container">
                <ControlButton >
                    <img src={prev} alt="voltar" className='button-icon'/>
                </ControlButton>
                <ControlButton >
                    <img src={stop} alt="parar" className='button-icon'/>
                </ControlButton>
                <ControlButton >
                    <img src={ispaused ? pause:play} alt="parar" className='button-icon' onClick={()=>handlePlay()}/>
                </ControlButton>
                <ControlButton >
                    <img src={next} alt="proximo" className='button-icon' onClick={()=>handlePlay()}/>
                </ControlButton>

            </div>
          
        </div>
    );
};
export default Controls;