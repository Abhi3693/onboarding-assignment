import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

function PageFour(props) {
  return (
    <>
      <div className='input-form'>
        <div className='tick-mark'>
          <IoMdCheckmark />
        </div>
      </div>
      <div className='form-heading-holder my-2'>
        <h1 className='heading text-center'>Congratulations, Eren!</h1>
        <span className='sub-heading text-center'>
          You have compeleted onboarding, you can start using the Eden!
        </span>
      </div>
    </>
  );
}

export default PageFour;
