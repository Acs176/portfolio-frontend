import React from 'react'
import './Job.css'

function Job({company, position, duration, description}) {
  return (
    <div className='job soft-white-2'>
        <div className='job-left'>
            <p className='sub-title'>{company}</p>
            <p className='sub-title'>{position}</p>
            <br/>
            <p>{duration}</p>
        </div>
        <p className='paragraph job-right'>
        {description}
        </p>
    </div>
  )
}

export default Job
