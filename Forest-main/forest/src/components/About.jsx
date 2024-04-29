import React from 'react'

const About = () => {
  return (
    <div className='realtive'>
      {/* <video className='absolute h-[100vh] w-[100vw] top-0 object-cover' src={detailbg} autoPlay muted loop></video> */}
      <div className='z-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-[70vw] mt-[14vh] mx-[15vw] flex flex-col gap-[5vw] text-[2vw] text-white bg-zinc-900 py-[2vh] rounded-md absolute'>
      <div className='flex justify-between px-[3vw]'>
        {/* <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={} alt="" /> */}
        <div className='flex justify-center items-start flex-col w-[30vw]'>
        <h1>Name: Samanvay Gupta</h1>
        <h1>Reg no. : 12316962</h1> 
        <h1>Role: Developer</h1>
        </div>
      </div>
      <div className='flex justify-between px-[3vw]'>
      {/* <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={} alt="" /> */}
        <div className='flex justify-center items-start flex-col w-[30vw]'>
        <h1>Name: Srujuna Addanki</h1>
        <h1>Reg no. : 12318186</h1> 
        <h1>Role: Design & Work Plan</h1>
        </div>
      </div>
      <div className='flex justify-between px-[3vw]'>
      {/* <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={} alt="" /> */}
        <div className='flex justify-center items-start flex-col w-[30vw]'>
        <h1>Name: Sachin Kumar</h1>
        <h1>Reg no. : 12318179</h1> 
        <h1>Role: Reserach Work</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
