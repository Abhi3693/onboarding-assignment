import React from 'react';

function PageTwo(props) {
  return (
    <>
      <div className='form-heading-holder my-2'>
        <h1 className='heading text-center'>
          Let's set up a home for all your work
        </h1>
        <span className='sub-heading text-center'>
          You can always change them later
        </span>
      </div>
      <div className='input-form'>
        <div className='my-2'>
          <label className='input-label' htmlFor='form-control-input1'>
            Workspace Name
          </label>
          <input
            type='text'
            name='workspaceName'
            id='form-control-input1'
            className='form-control p-1'
            placeholder='Steve Jobs'
            onChange={props.handleChange}
            value={props.formInput.workspaceName}
          />
        </div>
        <div className='my-2'>
          <label className='input-label' htmlFor='form-control-input2'>
            Workspace URL &nbsp;<span className='optional'> (optional)</span>
          </label>
          <div className='d-flex'>
            <span className='example-url-span'>www.eden.com/</span>
            <input
              name='workspaceURL'
              type='text'
              className='form-control p-1 example-url'
              placeholder='Example'
              id='form-control-input2'
              onChange={props.handleChange}
              value={props.formInput.workspaceURL}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
