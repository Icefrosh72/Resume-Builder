import React from 'react'

const Preview = ({ formData }) => {
  return (
    <div>
      <h2>Preview</h2>
      <p>{formData.fullName}</p>
      <p>{formData.email}</p>
      <p>{formData.education}</p>
      <p>{formData.experience}</p>
      <p>{formData.skills}</p>
    </div>
  )
}

export default Preview;
