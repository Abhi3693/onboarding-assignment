import React from 'react';

function PageOne(props) {
  return (
    <>
      <div className='form-heading-holder my-2'>
        <h1 className='heading text-center'>Welcome! first things first...</h1>
        <span className='sub-heading text-center'>
          You can always change them later
        </span>
      </div>
      <div className='input-form'>
        <div className='my-2'>
          <label className='input-label' htmlFor='form-control-input1'>
            Full Name
          </label>
          <input
            type='text'
            name='fullName'
            id='form-control-input1'
            className='form-control p-1'
            placeholder='Steve Jobs'
            onChange={props.handleChange}
            value={props.formInput.fullName}
          />
        </div>
        <div className='my-2'>
          <label className='input-label' htmlFor='form-control-input2'>
            Display Name
          </label>
          <input
            name='displayName'
            type='text'
            className='form-control p-1'
            placeholder='Steve'
            id='form-control-input2'
            onChange={props.handleChange}
            value={props.formInput.displayName}
          />
        </div>
      </div>
    </>
  );
}

export default PageOne;
