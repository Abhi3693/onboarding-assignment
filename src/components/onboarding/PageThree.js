import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { RiUserFill } from 'react-icons/ri';

function PageThree(props) {
  return (
    <>
      <div className='form-heading-holder my-2'>
        <h1 className='heading text-center'>
          How are you planing to use Eden?
        </h1>
        <span className='sub-heading text-center'>
          We'll streamline your setup experience accordingly
        </span>
      </div>
      <div className='input-form eden-form'>
        <div
          className={
            props.formInput.useEden === 'self'
              ? 'eden-card eden-card-selected'
              : 'eden-card'
          }
          onClick={() => props.handleSelectEden('self')}
        >
          <RiUserFill />
          <div>
            <h3>For myself</h3>
            <p>Write better. Think more clearly. Stay organised</p>
          </div>
        </div>
        <div
          className={
            props.formInput.useEden === 'team'
              ? 'eden-card eden-card-selected'
              : 'eden-card'
          }
          onClick={() => props.handleSelectEden('team')}
        >
          <HiUserGroup />
          <div>
            <h3>With my team</h3>
            <p>Wikis docs tasks & projects all in one place</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageThree;
