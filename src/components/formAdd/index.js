import React, { useContext } from "react";
import { AuthContext } from "../../providers";
import "./style.css";

export default function FormAdd() {
  const { name, setName, email, setEmail, handleClick } =
    useContext(AuthContext);

  return (
    <section className='sectionContainer p-3'>
      <form className='row g-3 needs-validation' onSubmit={handleClick}>
        <div className='titleContent'>
          <h3>Add user</h3>
        </div>
        <div className='col-md-6 position-relative'>
          <label htmlFor='validationTooltip01' className='form-label'>
            First name
          </label>
          <input
            type='text'
            className='form-control'
            id='validationTooltip01'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <div className='valid-tooltip'>Looks good!</div>
        </div>

        <div className='col-md-6 position-relative'>
          <label htmlFor='validationTooltipUsername' className='form-label'>
            E-mail
          </label>
          <div className='input-group has-validation'>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type='text'
              className='form-control'
              id='validationTooltipUsername'
              aria-describedby='validationTooltipUsernamePrepend'
              required
            />
            <div className='invalid-tooltip'>
              Please choose a unique and valid Email.
            </div>
          </div>
        </div>

        <div className='col-12 containerBtn'>
          <button className='btn btn-primary' type='submit'>
            Submit form
          </button>
        </div>
      </form>
      {/* <form className=' mt-3 mb-3'>
        <div className='titleContent'>
          <h3>Add user</h3>
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label '>
            Name
          </label>
        

          <input
            type='text'
            className='form-control'
            placeholder='Ex. Mary Smith'
            aria-label='Username'
            aria-describedby='basic-addon1'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className='containerBtn'>
          <button
            onClick={(e) => handleClick(e)}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form> */}
    </section>
  );
}
