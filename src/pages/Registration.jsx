import React from 'react';
import picture from '../assets/pic.png';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card lg:flex-row-reverse flex flex-col bg-base-100 shadow-2xl w-full max-w-4xl overflow-hidden rounded-lg">

                <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100">
                    <img src={picture} alt="Registration" className="object-contain h-80 lg:h-full" />
                </div>

                <div className="lg:w-1/2 w-full p-8 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                        <h2 className="text-2xl font-bold mb-2 text-[#0866FF]">Get started with easily register</h2>
                        <p className='text-gray-400 mb-6'>Free register and you can enjoy it</p>
                        <form className="flex flex-col gap-4">
                            <label className="label">Name</label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            <label className="label">Your Photo</label>
                            <input type="text" placeholder="Photo-URL" className="input input-bordered w-full" />
                            <label className="label">Email</label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" />

                            <label className="label">Password</label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full" />

                            <div className="flex items-center gap-x-5">
                                <span className='font-bold'>Already Have An Account ?</span>
                                <Link to='/'>
                                    <p className="link link-hover text-sm text-[#0866FF]">Sign In</p>
                                </Link>
                            </div>

                            <button className="btn bg-[#0866FF] text-white mt-4 w-full">Registration</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Registration;
