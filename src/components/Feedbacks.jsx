import React from 'react'
import Feedback from './Feedback'
import ClientImg from '../assets/Client2.png';
import Client2Img from '../assets/client.png'
import Dots from './Dots';

const Feedbacks = () => {
  return (
    <>
    <div className='bg-[#373737] flex flex-col text-center items-center gap-4 py-10'>
    <h1 className='font-Averia text-5xl font-semibold text-white'>Client's Feedback</h1>
    <div className='w-48 h-1 bg-[rgb(255,215,0)]'></div>
    </div>
    <div className='flex flex-col gap-5 bg-[#373737] pb-10'>
        <Feedback title = 'MR JACK' desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' Img= {ClientImg} allignment = {'-left-20'} padding= {'pl-[100px]'}/>
        <Feedback title = 'MR JOHN' desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' Img= {Client2Img} allignment= {'-right-20'} allignTitle = {'text-end'} padding= {'pr-[100px]'}/>
        <Feedback title = 'MR JACK' desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' Img= {ClientImg} allignment= {'-left-20'} dots= {<Dots />} padding= {'pl-[100px]'}/>
    </div>
    </>
    
  )
}

export default Feedbacks