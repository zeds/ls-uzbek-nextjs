import React from 'react'
import ".../globals.css"
const page = () => {
  return (
    <div className="container">
        <div className="frame">
            <image
            width={0}
            height={0}
            src="/foodball1.jpg" 
            alt="foodball1" 
            style={{width:"100%" , height:"auto",borderRadius:"20px"}}
            />
            <div className="desc">
             <image
            width={0}
            height={0}
            src="/foodball1-profil.jpg" 
            alt="foodball1-profil" 
            style={{width:"32px" , height:"32px",borderRadius:"16px"}}
            />
            <div> Cristiano Ronaldo is STILL THE GOAT at 38 • Dribbling Skills, Assists ; Goals 2023/24 | HD</div>
            <div> KIANO7HD</div>
            <div>260,055 views 3 months ago</div>
            </div>
        </div>
    </div>
  )
}

export default page