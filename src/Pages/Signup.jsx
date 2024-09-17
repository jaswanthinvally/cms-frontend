import React from 'react'

const Signup = () => {
  return (
    <div className='bg-sky-950 h-screen font-poppins text-md font-semibold text-white flex flex-col justify-center items-center'>
      <div className='bg-sky-500 rounded-xl w-auto p-3 flex flex-col'>
        <h1 className='text-center text-xl'>sign up</h1>
        <label>username</label>
        <input className=' rounded-md text-sky-950 focus:outline-none px-2' /><br />
        <label>password</label>
        <input className=' rounded-md text-sky-950 focus:outline-none px-2 '
          type='password'
        /><br />
        <label>re-enter password</label>
        <input className=' rounded-md text-sky-950 focus:outline-none px-2 '
          type='password'
        />


        <button className='bg-sky-950 w-1/2 rounded p-1 mt-3'>submit</button>




      </div>
    </div>
  )
}

export default Signup