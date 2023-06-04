import React, { useEffect, useState } from 'react'

const Backtotop = () => {
    const [toTop,setToTop]= useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >300){
                setToTop(true)
            }else{
                setToTop(false)
            }
        })
    },[])

    const scrollto =()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div style={{display:"grid",
    placeItems:"center",}}>
       {toTop && <button style={{
        position:"fixed",
        bottom: "4rem",
        right:"1rem",
        fontSize:"2rem",
        background:"#00df9a",
        height:"30px",
        borderRadius:"50%",
        width:"30px",
        transform:"translate(50% -50%)",
        color:"white",
       
       }} onClick={scrollto}>^</button>}
    </div>
  )
}
//{}[]

export default Backtotop