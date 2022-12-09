import React from "react";
import './signUpElements.css'

const SignUp = () => {

  return (
    <>
      <div className='SignContainer'>
        <h1 className='Signh1' to="/">Holla</h1>
        <div className='CardContainer'>
          <div className='SignCard'>
            <div className='SignLeft'>
              <div className='CardLeft'>
                <p className='SignText'>Sign up for new account</p>
              </div>
            </div>
            <div className='SignRight'>
              <div className='RightContainer'>
                <form className='Form'>
                  <p className='FormLabel' htmlFor="for">FirstName</p>
                  <input className='FormInput'
                    type="text"
                    required
                  />
                  <p className='FormLabel' htmlFor="for">LastName</p>
                  <input className='FormInput'
                    type="text"
                    required
                  />
                  <p className='FormLabel' htmlFor="for">Email</p>
                  <input className='FormInput'
                    type="email"
                    required
                  />
                  <p className='FormLabel' htmlFor="for">Password</p>
                  <input className='FormInput'
                    type="password"
                    reqeuired
                  />
                  <button className='FormButton' >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
);
};

export default SignUp;
