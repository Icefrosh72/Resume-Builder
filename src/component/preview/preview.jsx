// Preview.js
import React from 'react';

function Preview({ formData, selectedTheme }) {
  const themes = {
    default: {
      backgroundColor: '#fff',
      color: '#000',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
    // Add more themes as needed
  };

  const selectedThemeStyle = themes[selectedTheme] || themes.default;

  return (
    <div style={{ ...selectedThemeStyle, padding: '1rem', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Preview</h2>
      <p>{formData.fullName}</p>
      <p>{formData.email}</p>
      <p>{formData.education}</p>
      <p>{formData.experience}</p>
      <p>{formData.skills}</p>
      {/* Display other fields */}
    </div>
  );
}

export default Preview;
