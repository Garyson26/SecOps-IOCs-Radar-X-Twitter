import React from 'react'

const Verification = () => {
  return (
    <div className='py-10 px-4 md:px-10 md:py-20 bg-gray-50'>
        <div className='bg-white max-w-md mx-auto border p-5'>
            <h2 className='text-[24px] text-gray-800 mb-4 text-center font-semibold'>
                We've sent a Verification email to:
                demo@gmail.col 
            </h2>
            <p className='text-gray-800 text-center text-[14px]'>
                Click the link in your email to verify your account. if you can't find the email check your spam folder or <button className='text-indigo-600'>
                    click here to resend.
                </button>
            </p>
        </div>
    </div>
  )
}

export default Verification