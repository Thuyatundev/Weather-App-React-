import React from 'react'

const Form = () => {
  return (
    <div className='w-100 d-flex justify-content-center mt-4'>
        <input type="text"  className="form-control ms-5" placeholder='Enter Country Name ...' />
        <input type='button' className='btn btn-danger text-white ms-2 me-5' value="search"/>
    </div>
  )
}

export default Form