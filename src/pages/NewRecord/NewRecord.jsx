import React from 'react'
import './NewRecord.css'

export default function NewRecord() {
  return (
    <div className='FormContainer'>
      <form method='post' className='NewDataForm'>
        <a href='/'>Back to list page</a>
        <h1> New Data Input Form </h1>
        <fieldset>
          <label htmlFor='Name'>Name:</label>
          <input
            type='text'
            id='name'
            name='data[Name]'
            placeholder='Name'
            required='true'
          />
          <label htmlFor='Surname'>Surname:</label>
          <input
            type='text'
            id='Surname'
            name='data[Surname]'
            placeholder='Surname'
            required='true'
          />
          <label htmlFor='Gender'>Role:</label>
          <input
            type='text'
            id='Gender'
            name='data[Gender]'
            placeholder='Gender'
            required='true'
          />
          <label htmlFor='Status'>Status</label>
          <select
            type='text'
            id='Status'
            name='Status'
            placeholder='Status'
            required='true'
          >
            <option value='Working'>Working</option>
            <option value='Former Employee'>Former Employee</option>
          </select>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
