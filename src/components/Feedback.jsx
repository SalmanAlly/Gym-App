import React from 'react'

import StarImg from '../assets/Star.png'
const Feedback = (props) => {
  return (
    <>
    <div className='bg-[#373737] flex justify-center'>
        <div className='flex items-center lg:justify-center bg-[#808080] w-2/3 border-8 border-[rgb(255,215,0)] rounded-[60px] relative py-5 text-white'>
            <div className={`image absolute ${props.allignment}`}>
                <img className={`border-8 border-[rgb(255,215,0)] rounded-[50%] w-44 h-44 object-cover`} src={props.Img} alt="Client-Image" />
            </div>
            <div className={`w-full ${props.padding} ${props.allignTitle} `}>
                <h1 className={`font-Averia text-xl font-semibold ${props.allignTitle}`}>{props.title}</h1>
                <p className='font-Poppins text-sm opacity-60'>{props.desc}</p>
                <div className="stars flex gap-2 items-center justify-center mt-3">
                    <img src={StarImg} width={30} alt="Star-Image" />
                    <img src={StarImg} width={30} alt="Star-Image" />
                    <img src={StarImg} width={30} alt="Star-Image" />
                    <img src={StarImg} width={30} alt="Star-Image" />
                    <img src={StarImg} width={30} alt="Star-Image" />
                </div>
                
            </div>
            
        </div>
        
    </div>
    <div className='block mx-auto'>{props.dots}</div>
    </>
  )
}

export default Feedback