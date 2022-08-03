import React, { useState } from 'react';
// import { FaLeaf } from 'react-icons/fa';

// import edenLogo from '../../public/';
import PageOne from './onboarding/PageOne';
import PageTwo from './onboarding/PageTwo';
import PageThree from './onboarding/PageThree';
import PageFour from './onboarding/PageFour';
import Pagination from './Pagination';

const INITIAL_FORM_INPUT = {
  fullName: '',
  displayName: '',
  workspaceName: '',
  workspaceURL: '',
  useEden: '',
  launchEden: false,
};

function App() {
  const [formInput, setFormInput] = useState(INITIAL_FORM_INPUT);
  let [activePage, setActivePage] = useState(1);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (activePage < 4) {
      setActivePage(activePage + 1);
    }
  };

  const handleSelectEden = (val) => {
    setFormInput({ ...formInput, useEden: val });
  };

  return (
    <div className='container'>
      <div className='form-holder my-5 text-center'>
        <div className='logo-holder d-flex text-center'>
          <img className='logo-img' src='/edenLogo.png' alt='logo-img' />
          <h2 className='logo-text text-center'>Eden</h2>
        </div>
        <div className='pagination-holder my-5'>
          <Pagination activePage={activePage} />
        </div>
        <div className='page-holder'>
          {activePage === 1 ? (
            <PageOne handleChange={handleChange} formInput={formInput} />
          ) : activePage === 2 ? (
            <PageTwo handleChange={handleChange} formInput={formInput} />
          ) : activePage === 3 ? (
            <PageThree
              handleChange={handleChange}
              formInput={formInput}
              handleSelectEden={handleSelectEden}
            />
          ) : (
            <PageFour handleChange={handleChange} formInput={formInput} />
          )}
        </div>
        <input
          className='submit p-1'
          type='submit'
          value='Create Workspace'
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
