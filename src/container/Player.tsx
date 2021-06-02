import React from "react";
import { headerInfo,tracks } from "../services/api";
import PlaylistHeader from "./components/PlaylistHeader";
import PlaylistItem from './components/PlaylistItem'
const Player =()=>{
    return(
        <div className='player-container'>
           <PlaylistHeader {...headerInfo}/>
          
           {
                
               tracks.map((tracks)=>(
                   <PlaylistItem{...tracks} key={tracks.id}/>
               ))
                
           };
         
        </div>
    );
};
export default Player;