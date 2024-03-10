// Form.js
import React, { useState } from 'react';

function Form({ onFormChange }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    education: '',
    experience: '',
    skills: '',
    // Add more fields as needed
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value.trim() ? '' : 'This field is required' });
    onFormChange(formData); // Notify parent component of form changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    // Check for empty required fields
    for (const key in formData) {
      if (formData[key].trim() === '') {
        newErrors[key] = 'This field is required';
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Form submission successful, trigger preview
    onFormChange(formData);
  };

  const handleImport = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        setFormData(importedData);
        onFormChange(importedData); // Trigger preview after importing data
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      {errors.fullName && <p className="error">{errors.fullName}</p>}
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}
      <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange}></textarea>
      <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange}></textarea>
      {/* Add more input fields for other sections */}
      <input type="file" onChange={handleImport} accept=".json" />
      <button type="submit">Preview</button>
    </form>
  );
}

export default Form;
