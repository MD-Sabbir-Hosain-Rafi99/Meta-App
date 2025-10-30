import React from 'react'
import banner from '../assets/banner.png'
const Features = () => {
  return (
    <div className='container mx-auto mt-12'>
      <div className="flex justify-center items-center gap-8">
        <div className="">
          <div className="w-[490px]">
            <h1 className='text-6xl font-bold mb-10 text-[#0866FF]'>A place for meaningful conversations</h1>
            <p className='text mb-6 text-gray-600'>Messenger helps you connect with your Facebook friends and family, build your community and deepen your interests.</p>
          </div>
          <form>
            <input type="text" placeholder="Email address or phone number" className="input mb-3 border-none bg-gray-100 rounded-2xl" />
            <br />
            <input type='password' placeholder='Password' className="input border-none bg-gray-100 rounded-2xl" />
            <div className="mt-5 flex items-center gap-x-10">
              <button className="btn w-20 text-white rounded-3xl bg-[#0866FF]">Log In</button>
              <p className='text-[#0866FF] font-medium'>Forgetten Your Password ?</p>
            </div>
            <div className="flex items-center gap-x-2.5 mt-5">
              <input type="checkbox"  className="checkbox text-[#0866FF]" /> <p>Keep me signed in</p>
            </div>
          </form>
        </div>
        <div className="">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Features
